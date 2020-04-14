var str = '{"a": 1,"b":true,"c":false,"foo":null,"bar":[1,2,3],"str":"name"}'
var json=JSON.parse(str);
console.log(JSON.stringify(json));
var i = 0
var res = "";
function JsonToStr(jsonObj) {
    var type = typeof (jsonObj);
    if (jsonObj === null || type !== 'object') {//所有的基本类型，null的type是object，所以需要单独提出来
        if (type == 'string') {//string 类型需要使用双引号
            jsonObj = '"' + jsonObj + '"';
        }
        return String(jsonObj);
    } else {//对于object类型，包括对象，数组
        var arr = [];
        let objType=jsonObj.constructor;
        for (let key in jsonObj) {//如果jsonobj为数组类型，则key为对象，如果为对象，则key为键
            var item = jsonObj[key];
            // console.log(item)
            let t = typeof(item);//获取数组或者对象类型
            if (t !== 'object' || item === null) {//表明jsonObj不是数组，item是值
                if (t == 'string') {//string 类型需要使用双引号
                    item = '"' + item + '"';
                }
            } else {//jsonobj是数组，item是对象
                item = JsonToStr(item);
            }
            item = String(item);
            if(objType===Array){
                arr.push(item);//此时的key只是数组下标
            }else{
                arr.push('"'+key + '":' + item);
            }
        }
        if(objType===Array){
            return '['+arr+']';
        }else{
            return '{'+arr+'}';
        }
    }
}
console.log(JsonToStr(json));