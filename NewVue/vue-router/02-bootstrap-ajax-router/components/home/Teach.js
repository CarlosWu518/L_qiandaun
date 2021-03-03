;
(function() {
    const template = `<div>
    <ul >
        <li v-for="(teach,index) in teachArr" :key="teach.id">
            <span>{{teach.title}}</span>
            <button @click="pushTeach(teach.id)" class="btn  btn-default btn-xs">查看(Push)</button>&nbsp;
            <button  @click="replaceTeach(teach.id)" class="btn btn-default btn-xs">查看(replace)</button>
        </li>
    </ul>
    <!--详情-->
    <router-view>  </router-view> 
  </div> `
    window.Teach = {
        template,
        data() {
            return {
                teachArr: []
            }
        },
        created() {
            this.getTeachArr()
        },
        methods: {
            pushTeach(id) {
                this.$router.push(`/news/teach/detail/${id}`)
            },
            replaceTeach(id) {
                this.$router.replace(`/news/teach/detail/${id}`)
            },
            getTeachArr() {
                axios.get('http://127.0.0.1:5500/NewVue/vue-router/02-bootstrap-ajax-router/db/tech.json').then((response) => {
                    //success                 
                    this.teachArr = response.data
                }).catch((error) => {
                    alert(error.message)
                })
            }
        },
    }
})()