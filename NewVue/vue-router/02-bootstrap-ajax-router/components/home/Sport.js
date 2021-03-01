;
(function() {
    const template = `<div>
    <ul>
        <li v-for="(sport,index) in sportArr" :key="sport.id">
            <a href="#">{{sport.title}}</a>
            <router-link :to ="'/news/sport/detail/'+sport.id">{{sport.title}}</router-link>
        </li>
    </ul>
    <!--详情-->
    <router-view>  </router-view> 
  </div> `
    window.Sport = {
        template,
        created() {
            this.getSportArr()
        },
        data() {
            return {
                sportArr: []
            }
        },
        methods: {
            getSportArr() {
                axios.get('http://127.0.0.1:5500/NewVue/vue-router/02-bootstrap-ajax-router/db/sport.json').then((response) => {
                    //success                 
                    this.sportArr = response.data
                }).catch((error) => {
                    alert(error.message)
                })
            }
        },
    }
})()