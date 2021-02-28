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
                hobbies: [],
                empList: [

                ]
            }
        },
        created() {
            axios.get('http://127.0.0.1:5500/NewVue/vue-%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%92%8Caxios/02-bootstrap-ajax-router/emp.json').then((response) => {
                //success
                console.log(response.data);
                this.empList = response.data
            }).catch((error) => {
                console.log(error.message);
                alert(error.message)
            })
            axios.get('http://127.0.0.1:5500/NewVue/vue-%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%92%8Caxios/02-bootstrap-ajax-router/hobbies.json').then((response) => {
                //success
                console.log(response.data);
                this.hobbies = response.data
            }).catch((error) => {
                console.log(error.message);
                alert(error.message)
            })
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