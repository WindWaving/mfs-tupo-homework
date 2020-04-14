/*引入模块 */
var createError = require('http-errors');//404 not found
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*引入路由 */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();//创建一个express实例

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置视图地址
app.set('view engine', 'jade');//设置视图引擎为jade

/*中间件，用来给path注册中间函数，默认path是'/' */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//url参数解析
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//静态资源绑定

/*将文件路径与页面路由联系起来 */
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
/*对于访问路由不存在的页面创建404页面 */
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
/*错误捕捉 */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;//设置错误信息
  res.locals.error = req.app.get('env') === 'development' ? err : {};//赋值error对象

  // render the error page
  res.status(err.status || 500);//请求返回状态
  res.render('error');//渲染错误页面
});

module.exports = app;//导出express实例
