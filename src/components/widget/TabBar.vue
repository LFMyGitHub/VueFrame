<template>
	<div id="TabBar" class="footer">
		<div class="tab_bar_item" v-for="item in footNav" :key="item.index" @click="selectMapNav(item)">
			<img :src="isSelect === item.title ? item.url1 : item.url" alt="">
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script>
    export default {
        name: "TabBar",
        props: {
        },
        data(){
			return{
				isSelect: '首页',
				footNav: [{title: '首页', index: 0, url: require('../../assets/logo.png'), url1: require('../../assets/logo.png')},
						{title: '首页', index: 1, url: require('../../assets/logo.png'), url1: require('../../assets/logo.png')},
						{title: '首页', index: 2, url: require('../../assets/logo.png'), url1: require('../../assets/logo.png')}
						],
				
			}
		},
        methods: {
			selectMapNav(item){
				this.isSelect = item.title
				this.$emit('select-item', item);
			}
        }
    }
</script>

<style lang="stylus" scoped>
.footer{
	width 100%
	height 50px
	position fixed
	bottom 0
	z-index 1
	background-color #fff
	display flex
	list-style none
	.tab_bar_item{
		text-align center
		flex 1
		img{
			height 23px
			width 23px
			margin-top 5px
		}
		p{
			font-size 0.1rem
			height 15px
			line-height 10px
		}
	}
}
</style>