var routes = [
	{
		path:'/',
		component:{
			template:`
				<div>
					<h1>
						首页
					</h1>
				</div>
			`,
		}
	},
	{
		path:'/login',
		component:{
			sidebar:{
				template:`
					<div>
						<ul>
							<li>用户列表</li>
							<li>权限管理</li>
						</ul>
					</div>
				`,
			},
			content:{
				content:{
					template:`
						<div>Lorem ipsum dolor sit amet,consectetur i wan to have more money</div>
					`,
				}
			}
		}
	}
];

var router = new VueRouter({
	routes:routes,
});

router.beforeEach(function(to,from,next){
	var logged_in = true;

	if (!logged_in && to.push == '/post') {
		next('/login');
	}else{
		next();
	}
});


router.afterEach(function(to,from){

});


new Vue({
	el:'#app',
	router:router,
})