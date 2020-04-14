const router = require('koa-router')()
const fs = require('fs')
const mysql = require('mysql')

var conn = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: 'usbw',
  database: 'user'
})
conn.connect();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/check', async (ctx, next) => {
  let user = ctx.request.body.username
  let res
  await new Promise((resolve, reject) => {
    conn.query('select * from user where username="' + user + '"', (err, results) => {
      if (!err) {
        resolve(results[0]);
      }
    })
  }).then((data) => {
    if (data) {
      res = "invalid"
    } else {
      res = "valid"
    }
    ctx.body = res
  })
})
router.post('/save', async (ctx, next) => {
  let username = ctx.request.body.username
  let password = ctx.request.body.password
  await new Promise((resolve, reject) => {
    conn.query('insert into user set username="' + username + '",password="' + password + '"', (err, results) => {
      if (!err) {
        resolve("保存成功")
      } else {
        reject("保存失败")
      }
    })
  }).then((data) => {
    if (data == '保存成功') {
      ctx.body = data
    }
  }).catch((err) => {
    ctx.body = "保存失败"
  })
})

module.exports = router
