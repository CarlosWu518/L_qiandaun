//1.引入express
const { count } = require('console');
const { response } = require('express');
const express = require('express');
const { request } = require('http');
//2.创建应用对象
const app = express();
//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头
    response.setHeader('Assess-Control-Allow-Origin', '*')
        //设置响应
    response.send('HELLO AJAX')
});
//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中....");
})