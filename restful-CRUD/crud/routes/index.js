var express = require('express');
const fs = require('fs');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'CRUD' });
});

router.get('/hi', function (req, res, next) {
  res.end("hi");
});
var userfile = __dirname + '/userfile.json';
var code = "utf-8";

router.get('/userlist', (req, res) => {
  fs.readFile(userfile, code, (err, data) => {
    res.end(data);
  })
})

router.post('/userlist/:user', (req, res) => {
  var obj = JSON.parse(req.params.user);
  var id = obj.id;
  fs.readFile(userfile, code, (err, data) => {
    if (data) {
      data = JSON.parse(data);
      data["user" + id] = obj;
      fs.writeFile(userfile, JSON.stringify(data), (err) => {
        if (!err) {
          res.end("保存成功");
        }
      })
    }
  })

})

router.delete('/userlist/:id', (req, res) => {
  var id = req.params.id;
  fs.readFile(userfile, code, (err, data) => {
    data = JSON.parse(data);
    console.log(data, data["user" + id]);
    delete data["user" + id];
    fs.writeFile(userfile, JSON.stringify(data), (err) => {
      if (!err) {
        res.end("删除成功");
      }
    })
  })
})

router.put('/userlist/:user', (req, res) => {
  var obj = JSON.parse(req.params.user);
  console.log(req.params.user, obj);
  var id = obj.id;
  fs.readFile(userfile, code, (err, data) => {
    if (data) {
      data = JSON.parse(data);
      if (!data['user' + id]) {
        res.end("用户不存在")
      } else {
        data["user" + id] = obj;
        fs.writeFile(userfile, JSON.stringify(data), (err) => {
          if (!err) {
            res.end("更新成功");
          }
        })
      }
    }
  })
})
router.patch('/userlist/:user', (req, res) => {
  var obj = JSON.parse(req.params.user);
  console.log(req.params.user, obj);
  var id = obj.id;
  fs.readFile(userfile, code, (err, data) => {
    if (data) {
      data = JSON.parse(data);
      if (!data['user' + id]) {
        res.end("用户不存在")
      } else {
        data["user" + id] = obj;
        fs.writeFile(userfile, JSON.stringify(data), (err) => {
          if (!err) {
            res.end("更新成功");
          }
        })
      }

    }
  })
})


module.exports = router
