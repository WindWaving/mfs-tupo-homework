const MongoClient = require('mongodb').MongoClient;
const DBURL = 'mongodb://localhost:27017';
const QuesDB = "zhihu-questions";

var myChart = echarts.init(document.getElementById('main'));
// myChart.setOption({
//     title: {
//         text: '知乎问题关注者——回答数量关系图'
//     },
//     tooltip: {},
//     // xAxis: {
//     //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     // },
//     // yAxis: {},
//     series: [{
//         name: '关注者——回答数',
//         type: 'line',
//         data: []
//     }]
// });
function getFolAns() {
    MongoClient.connect(DBURL, async (err, client) => {
        if (err) { console.log("连接数据库失败") }
        else {
            let db = client.db(QuesDB);
            //查找所有的关注数量和回答数量的数据
            let collection = db.collection('questions');
            let findres = await collection.find({}, { 'followers': 1, 'cnts': 1, '_id': 0 }).toArray();
            console.log(findres);
        }
    })
}
getFolAns();