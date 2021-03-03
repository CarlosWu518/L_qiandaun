 //引入node中的path模块,处理文件路径的小工具
 const path = require('path')
     //导出webpack具有特殊属性配置的对象
 module.exports = {
     mode: 'production',
     //入口
     entry: './src/main.js',
     //出口
     output: {
         path: path.join(__dirname, './dist/'),
         filename: 'bundle.js'
     }
 }