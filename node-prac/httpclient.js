const client=require('http');
client.get('http://localhost:8008',function(res){
    res.on('data',function(data){
        console.log(data.toString());
    })
})