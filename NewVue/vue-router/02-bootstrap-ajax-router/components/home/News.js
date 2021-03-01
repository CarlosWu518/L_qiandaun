;
(function() {
    const template = ` <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
<div class="header clearfix">
  <nav>
    <ul class="nav nav-pills">
      
      <router-link to="/news/sport" tag="li">
      <a>体育</a>
      </router-link>
      <router-link to="/news/teach" tag="li">
      <a>科技</a>
      </router-link>
    </ul>
  </nav>
  <hr>
</div>

<!--体育栏目--><!--科技栏目-->
    <router-view></router-view>

		 
</div>`
    window.News = {
        template
    }
})()