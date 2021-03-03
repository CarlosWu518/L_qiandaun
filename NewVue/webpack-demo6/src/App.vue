<template>
    <div>
        <h1>App 根组件</h1>
        <h2>{{ msg }}</h2>
        <!-- <Foo/>  -->
        <foo></foo>
    </div>
</template>

<script>
    // 要使用某个组件，要先导入再使用
    import Foo from  './components/Foo.vue'

    // 导出一个默认的成员对象 ，它就是当前组件对象 ， 可以直接在对象 中使用Vue中的选项，如data/methods/watch
    export default {
        data () {
           return {
                msg : 'hello mxg'
           }
        },
        // template: 此选项不用写，因为上面template标签代表的就是当前的组件模板
        // 引用子组件
        components: {
            Foo
        }
    }

</script>
<style scoped>
/* scoped 作用是将样式只作用到当前组件中，不然会传递到其他 父子组件中 */
    h1 {
        color: red
    }
</style>
