const express = require('express')    // 使用commonjs全局引入express
const app = express()
const port = 3030   // 设置端口号
const mysql = require('mysql')
app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'dome'
})
  
connection.connect()


// 推荐
app.get('/index', (req, res) => {
    connection.query('select * from recom where id<51', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});  // 创建了一个路由接口
// 时令
app.get('/index1', (req, res) => {
    connection.query('select * from recom where id>51 and id<101', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});  // 创建了一个路由接口
// 食肉
app.get('/index2', (req, res) => {
    connection.query('select * from recom where id>101 and id<151', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});  // 创建了一个路由接口
// 素食
app.get('/index3', (req, res) => {
    connection.query('select * from recom where id>151 and id<201', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});  // 创建了一个路由接口
// 烘培
app.get('/index4', (req, res) => {
    connection.query('select * from recom where id>201 and id<250', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});  // 创建了一个路由接口
app.get('/video', (req, res) => {
    connection.query('select * from video limit '+req.query.id+',22', function (err, result) {
        const obj={
            status: 200,
            data: result
        }
        res.json(obj)
    })
});  // 创建了一个路由接口
app.listen(port, () => console.log(`Example app listening on port ${port}!`))   // 监听端口