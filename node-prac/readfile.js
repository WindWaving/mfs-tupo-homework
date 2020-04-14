var fs=require('fs');
var readStream=fs.createReadStream('node-prac/test.txt');
readStream.setEncoding('UTF8');
readStream.on('data',function(data){
    console.log(data);
});
readStream.on('error',function (error) {
    console.log(error.stack);
})