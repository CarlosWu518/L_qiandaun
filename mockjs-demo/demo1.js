const Mock = require('mockjs');
const data = Mock.mock({
    'memberList|4': [{
        'id|+1': 1,
        'name|1-3': 'CarlosWu',
        'phone|11': '8',
        'age|1-120': 1,
        'salary|6000-8000.1-3': 1,
        'status|1': true,
        'open|2-4': true,
        'order|3': {
            id: 1,
            name: 'ss',
            price: 999
        },
        'order1|2-3': {
            id: 1,
            name: 'ss',
            price: 999
        },
        'idCard': /\d{15}|\d{18}/
    }]
});
console.log(JSON.stringify(data, null, 2));