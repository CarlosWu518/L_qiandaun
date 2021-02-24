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
    response.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应
    response.send('HELLO AJAX')
});
app.post('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应
    response.send('HELLO AJAX POST')
});
app.all('/server-json-2', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'CarlosWu'
    }
    let str = JSON.stringify(data);
    //设置响应
    response.send(str);
});
app.get('/ie', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
        //设置响应
    response.send('HELLO IE')
});
//延时响应
app.all('/delay', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        //设置响应
        response.send('延时响应');
    }, 1000);

});
//jQuery
app.all('/jQuery-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = { name: 'CarlosWu', age: '24' };
    //设置响应
    response.send(JSON.stringify(data));

});
//axios
app.all('/axios-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = { name: 'CarlosWu', age: '24' };
    //设置响应
    response.send(JSON.stringify(data));

});
//fetch
app.all('/fetch-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = { name: 'CarlosWu', age: '24' };
    //设置响应
    response.send(JSON.stringify(data));

});
//jsonp
app.all('/jsonp-server', (request, response) => {

    //  response.send('console.log("hello jsonp")');
    const data = {
        name: 'CarlosWu'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});
//用户名是否存在
app.all('/check-username', (request, response) => {

    const data = {
        exist: 1,
        msg: '用户名已存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});
//jquery-jsonp
app.all('/jquery-jsonp-server', (request, response) => {

    const data = {
        name: 'CarlosWu',
        age: 23
    };
    let str = JSON.stringify(data);
    //接受callback参数
    let cb = request.query.callback;
    response.end(`${cb}(${str})`);
});
//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中....");
})