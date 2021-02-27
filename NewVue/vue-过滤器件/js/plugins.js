(function(){

    //声明 MyPlugin 插件对象
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
          alert('MyPlugin.myGlobalMethod全局方法调用了')
        }
      
        // 2. 添加全局指令
        Vue.directive('my-directive', {
          inserted (el, binding) {
              el.innerHTML = "MyPlugin.my-directive指令被调用了" + binding.value
          }
        })

        // 3. 添加实例方法 new Vue()
        Vue.prototype.$myMethod = function (value) {
            alert('Vue 实例方法myMethod被调用了:' + value)
        }
      }

      //将插件添加 到 window对象
      window.MyPlugin = MyPlugin

})()