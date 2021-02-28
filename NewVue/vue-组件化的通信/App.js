;
(function() {
    const template = ` 
    <div>
        <!--头部导航区域-->
        <app-navbar></app-navbar>
        <!--核心区域:分左右两边-->
        <div class="container-fluid">
            <div class="row">
                <!--左边菜单栏区域-->
                <app-leaf></app-leaf>
                <!--右边主页面区域: 分上下两个区域-->
                <app-home>
                <h1 slot="dashboard" class="page-header">{{title}}</h1>
                </app-home>
            </div>
        </div>
    </div>`
    window.App = {
        template,
        components: {
            'app-navbar': AppNavbar,
            'app-leaf': AppLeaf,
            'app-home': AppHome,
        },
        data() {
            return {
                title: '仪表盘'
            }
        }
    }
})()