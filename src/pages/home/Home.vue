<template>
	<div>
		Home
		<div v-for="(item, index) in 100" :key="index">
			<button @click="linkPage(item)" style="width: 100%;">{{item}}</button>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Home',
		methods: {
			linkPage(item){
				console.log(item)
				this.$router.push("HomePage1")
			}
		}
	} 
</script>

<style>
</style>
