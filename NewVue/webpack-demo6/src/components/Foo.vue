<template>
<!-- 一个vue文件中有且仅有一个template -->
    <div>
        <h1>我是 Foo 子组件1111</h1>
        <h2>我是 Foo子组件 h22222</h2>
    </div>
</template>
<script>
// 如果 不写js代码,可以不需要 <script>
// 一般采用的是导出一个默认成员 对象
export default {
    
}
</script>

<style scoped>
/* 如果 不写样式代码,可以不需要 <style> */
/* scoped 作用是将样式只作用到当前组件中，不然会传递到其他 父子组件中 */
    h2 {
        color: blue
    }
</style>

