var str = '{"a": 1,"b":true,"c":false,"foo":null,"bar":[1,2,3],"exp":/^hello/}'
var i = 0

function parseValue(){
    if(str[i]=='{'){
        return parseObject();
    }else if(str[i]=='"'||str[i]=='\''){
        return parseString();
    }else if(str[i]=='t'){
        return parseTrue();
    }else if(str[i]=='f'){
        return parseFalse();
    }else if(str[i]=='n'){
        return parseNull();
    }else if(str[i]=='['){
        return parseArray();
    }else if(str[i]>=0&&str[i]<=9){
        return parseNumber();
    }else if(str[i]=='/'){//解析正则
        return parseExp();
    }
    else{//处理空格
        ++i;
    }
}

function parseExp(){
    ++i;
    var res="/";
    while(str[i]!='/'){
        res+=str[i++];
    }
    res+="/";
    ++i;
    return eval(res);
}
function parseObject(){
    ++i;//到达双引号
    var res={};
    while(str[i]!='}'){
        var key=parseString();
        ++i;//移动到冒号后
        var value=parseValue();//此时的i在解析的数据后面一个字符位置
        res[key]=value;
        if(str[i]==','){
            ++i;//移动到逗号后面
        }
    }
    ++i;
    return res;
}
//解析字符串
function parseString(){
    var res="";
    if(str[i]=='\''){
        ++i;
        while(str[i]!='\''){
            res+=str[i++];
        }
    }else{
        ++i;//移动到双引号中第一个字符
        while(str[i]!='"'){
            res+=str[i++];
        }
    }
    
    ++i;//移动到双引号后一个字符
    return res;
}
//解析true
function parseTrue(){
    var boo=str.substr(i,4);
    if(boo!='true'){
        throw new Error("true解析失败")
    }else{
        i+=4;
    return true;
    }
}
//解析false
function parseFalse(){
    var boo=str.substr(i,5);
    if(boo!='false'){
        throw new Error('false解析失败')
    }else{
        i+=5;
    return false;
    }
}
//解析null
function parseNull(){
    var res=str.substr(i,4);
    if(res!='null'){
        throw new Error('null解析失败')
    }else{
        i+=4;
    return null;
    }
}
//解析数组
function parseArray(){
    var res=[];
    ++i;
    while(str[i]!=']'){
        var value=parseValue();
        res.push(value);
        if(str[i]==','){
            ++i;
        }
    }
    ++i;
    return res;
}
function parseNumber(){
    var res='';
    while(str[i]=='+'||str[i]=='-'||str[i]=='e'||str[i]=='E'||str[i]=='.'||(str[i]<=9&&str[i]>=0)){
        res+=str[i++];
    }
    return parseFloat(res);
}

console.log(parseValue());