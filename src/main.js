import Vue from 'vue'
import App from './App.vue'

//引入路由文件
import router from './router/index.js'

Vue.config.productionTip = false
new Vue({
	//引入路由对象
	router,
	render: h => h(App),
}).$mount('#app')
