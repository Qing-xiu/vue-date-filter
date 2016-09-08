require(['../index.js', 'src/vue.js'], function(dateFilter, Vue){
	Vue.use(dateFilter.default);

	new Vue({
		el: 'body',
		data:{
			now: new Date()
		}
	})	
})
