<template>
	<div id="app">
		<div>
			<!--router-view定义页面中显示部分-->
			<router-view style="margin-bottom: 50px;"></router-view>
		</div>
		<TabBar @select-item="onClickTabBarItem" v-if="isTop"/>
		<!--router-link定义页面中点击触发部分-->
		<!-- <div>
			<router-link to="/home">Home</router-link>
			<router-link to="/about">About</router-link>
		</div> -->
	</div>
</template>

<script>
	import TabBar from './components/widget/TabBar.vue'
	export default {
		name: 'App',
		data: function(){
			return{
				item: 0,
				isTop: true
			}
		},
		components:{
			TabBar
		},
		methods:{
			onClickTabBarItem: function(item){
				if(item.index === 0){
					this.$router.replace({name: "Home"})
				}else if(item.index === 1){
					this.$router.replace({name: "About"})
				}
			},
		},
		watch:{
			$route(to){
				let topPage = ['Home', 'About']
				let toName = to.name
				console.log(toName)
				this.isTop = false
				for (let i=0;i<topPage.length;i++) {
					if (toName === topPage[i]) {
						this.isTop = true
						break
					}
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
