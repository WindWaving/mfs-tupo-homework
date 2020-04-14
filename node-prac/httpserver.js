const http = require('http');
const formidable = require('formidable');
const fs=require('fs');
const server=http.createServer();
server.on('request',(req,res)=>{
    if(req.method.toLowerCase()=="post"){
        var data=[];
        req.on('data',(chunk)=>{
            data.push(chunk);
        })
        req.on('end',()=>{
            // console.log(data.toString());
            var writeStream=fs.createWriteStream('output.txt');
            writeStream.write(data.toString(),'UTF8');
            writeStream.end();
            writeStream.on('finish',()=>{
                res.end("saved");
            })
        })
    }
})
server.listen(8009)
console.log('Server running at http://127.0.0.1:8009/');