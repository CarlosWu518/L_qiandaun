;
(function() {
    const template = `<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
        <router-link to="/" tag="li" exact ><a>首页</a></router-link>
        <router-link to="/news" tag="li" ><a>新闻</a></router-link>
        <router-link to="/about" tag="li" ><a>关于我们</a></router-link>
    </ul>
</div>`
    window.AppLeaf = {
        template,
        data() {
            return {
                delNum: 0
            }
        },
        created() {
            PubSub.subscribe('changeNum', (event, num) => {
                //事件回调处理
                this.delNum = this.delNum + num
            })
        },
    }
})()