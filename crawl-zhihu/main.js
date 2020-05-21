const rp = require('request-promise');
const cheerio = require('cheerio');
const htmlEncode = require('js-htmlencode').htmlEncode;
const htmlDecode = require('js-htmlencode').htmlDecode;
const MongoClient = require('mongodb').MongoClient;
const DBURL = 'mongodb://localhost:27017';
const QuesDB = "zhihu-questions";

/*获取网页内容*/
async function get_page(db, id) {
    let url = "https://www.zhihu.com/question/" + id;
    let options = {
        uri: url,
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
        }
    }
    let htmlString = await rp(options);
    var obj = {};
    var $ = cheerio.load(htmlString);
    //问题id
    obj['id'] = id;
    //问题标题
    let title = $('.QuestionHeader-title').text();
    obj['title'] = title;
    //关注者数量
    let followers=$('.QuestionFollowStatus-counts .NumberBoard-itemValue').eq(0).text();
    obj['followers']=+followers;
    //答案总数
    let cnts = $(".List-headerText span").text();
    cnts = cnts.split(' ')[0];
    if (cnts.length == 0) {//0个答案
        cnts = 0;
    }
    obj['cnts'] = +cnts;
    
    //保存问题到数据库
    // get_answers(db,obj);
    let collection = db.collection('questions');
    let findres = await collection.find({ 'title': title }).toArray();
    if (findres.length == 0) {
        try{
            await collection.insertOne(obj);
            console.log(obj['id']);
        }catch(err){
            console.log("插入问题失败"+err);
        }
        if(obj['cnts']>0){
            try{
                await get_answers(db, obj);
            }catch(err){
                console.log("请求回答失败,"+obj['id']);
            }
        }
    } else {
        console.log("该问题已经存在")
    }
}

/*
保存问题答案到QuesDB数据库
@params:数据库，该问题对象{id,title,cnts}
*/
async function get_answers(db, obj){
    var arr = [];
    //发送请求获取答案
    for (let i = 0; i < obj['cnts']; i += 20) {
        let options = {
            uri: "https://www.zhihu.com/api/v4/questions//" + obj['id'] + "/answers?include=data%5B%2A%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Crelevant_info%2Cquestion%2Cexcerpt%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cis_labeled%2Cis_recognized%2Cpaid_info%2Cpaid_info_content%3Bdata%5B%2A%5D.mark_infos%5B%2A%5D.url%3Bdata%5B%2A%5D.author.follower_count%2Cbadge%5B%2A%5D.topics&limit=20&offset=" + i,
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
            }
        }
        let res = await rp(options);
        let data = JSON.parse(res)['data'];
        data.map(item => {
            let ans = {};
            ans['id'] = obj['id'];
            ans['answer'] = item['excerpt'];
            arr.push(ans);
        })
    }
    //保存回答到db中
    let collection = db.collection('answers');
    collection.insertMany(arr, (err, res) => {
        if (err) { console.log("插入答案失败," + obj['id']); }
        // else { console.log("插入答案成功,"+obj['id']); }
    })
}

(function main() {
    MongoClient.connect(DBURL, (err, client) => {
        if (err) {
            console.log("数据库连接失败," + err);
        } else {
            var total=0;
            var valid=0;
            var db = client.db(QuesDB);
            let idArr = [];
            let [start,len]=[387744000,5000]
            for (let i = start; i < start+len; ++i) {
                idArr.push(i);
            }
            idArr.map(async (id) => {               
                try {
                    //爬取存在的网页
                    await get_page(db, id);
                    ++total;++valid;
                    console.log(total,valid);
                    if(total==len){
                        console.log("done",valid);
                    }
                } catch (err) {
                    // console.log("请求失败," + id)
                    ++total;
                    if(total==len){
                        console.log("done");
                    }
                }
            })

        }
    })


})();
