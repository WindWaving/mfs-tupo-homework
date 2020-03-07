var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
  document.domain = "a.com"
});
router.get("/test", function (req, res, next) {
  res.jsonp({ text: "hello there" });
})
router.post("/cors", function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  // res.header({"Access-Control-Allow-Methods":"*"});
  res.json({ methods: "post" });
})
router.post("/formtest", function (req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  var name=req.body.name;
  var obj={errno:1,errmsg:"用户名已经存在",data:{}};
  if(name=="mafengshe"){
    res.send(obj);
  }else{
    obj.errno=0;
    obj.errmsg="";
    res.send(obj);
  }
})
module.exports = router;
