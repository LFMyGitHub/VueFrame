import Vue from 'vue'
import VueRouter from 'vue-router'

//1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
	{
		path: '',
		//重定向
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/pages/home/Home'),
		children: [
			{
				path: '/home/page1',
				name: 'HomePage1',
				component: () => import('@/pages/home/Home'),
			}
		]
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/pages/about/About')
	}
]

const router = new VueRouter({
	//配置路由和组件之间的应用关系
	routes,
	mode: 'history',
	linkActiveClass: 'active'
})

//3.将router对象传入到Vue实例
export default router