const Mock = require('mockjs');
const data = Mock.mock({
    'memberList|6': [{
        'id|+1': 1,
        'name': '@cname',
        'price': '@float',
        'status': '@boolean',
        'brithday': '@date("yyyy/MM/dd")',
        'createDate': '@datetime("yyyy/MM/dd HH:mm:ss")',
        'pic': '@image',
        'title': '@ctitle',
        'content': '@csentence(20,50)',
        'first': '@cfirst',
        'last': '@clast',
        'url': '@url("http","CarlosWu.cn")',
        "domain": "@domain",
        "ip": "@ip",
        'region': '@region',
        'address': "@county(true)",
        'zip': '@zip'
    }]
});
console.log(JSON.stringify(data, null, 2));