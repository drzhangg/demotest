/*Vue.component('alert',);*/

new Vue({
	el:'#app',
	omponent:{
		alert:{
			template:'<button @click="on_click">弹弹弹</button>',
		    methods:{
		        on_click:function () {
		            alert('Yo');
		        }
		    }
		}  
	}
})