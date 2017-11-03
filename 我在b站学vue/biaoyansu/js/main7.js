Vue.component('user',{
    template:'<a :href="\'/user/\' + username">{{username}}</a>',
    props:['username'],
    methods:{
        on_click:function () {
            alert(this.username);
        }
    }
})

new Vue({
    el:'#app',
})