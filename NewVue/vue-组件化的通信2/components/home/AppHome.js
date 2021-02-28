;
(function() {
    const template = ` <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <!--右边上半区域-->
    <!--<h1 class="page-header">Dashboard</h1>-->
    <!--定义插槽--> <slot name="dashboard"></slot>
    <dashboard :hobbies="hobbies" @delete_hobby="deleteHobby"></dashboard>
    <!--右边下半区域-->
    <h2 class="sub-header">Section title</h2>
    <home-list :empList="empList" :deleteEmp="deleteEmp"></home-list>
    
</div>`
    window.AppHome = {
        template,
        data() {
            return {
                hobbies: ['吃饭', '敲代码', '学习', '看书'],
                empList: [
                    { id: 1, name: '小吴', salary: '5000' },
                    { id: 2, name: '小吴', salary: '5000' },
                    { id: 3, name: '小吴', salary: '5000' },
                    { id: 4, name: '小吴', salary: '5000' },
                    { id: 5, name: '小吴', salary: '5000' },
                    { id: 6, name: '小吴', salary: '5000' },
                ]
            }
        },
        components: {
            Dashboard,
            HomeList
        },
        methods: {
            deleteEmp(index) {
                this.empList.splice(index, 1)
            },
            deleteHobby(index) {
                this.hobbies.splice(index, 1);
                PubSub.publish('changeNum', 1)
            }
        },
    }
})()