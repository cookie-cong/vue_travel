<template>
    <div class="header">
        
			<div class="header_left">
				<i class="iconfont back-icon">&#xe601;</i>
			</div>
			<div class="header_center" >
				<i class="iconfont">&#xe60a;</i>
				输入城市/游玩景点/主题</div>
		<router-link to="../../City/City.vue">
			<div class="header_right">北京
				<i class="iconfont arrow-icon">&#xe644;</i>
			</div>
		</router-link>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="stylus" scoped>
	/* <!-- 1rem = html font-size=50px --> */
@import  '~styles/common.styl'  //样式里引用样式，必须加@import   在build里进行了配置项，就和src可以用@代表一样，但是
	//一定要加~这个符号  因为在css中引入了其他的css样式
.header
	display:flex
	line-height:.86rem
	background:$bgColor
	color:#fff
	.header_left
		width:.64rem
		float:left
		.back-icon
			font-size:.4rem
			padding-left:.16rem
	.header_center
		flex:1
		background:#fff
		border-radius:.1rem
		margin-top:.12rem
		margin-left:.2rem
		height:.64rem
		line-height:.64rem
		color:#ccc
		border:none
		padding-left:.2rem
	.header_right
		width:1.24rem
		float:right
		text-align:center
		color:#fff
		.arrow-icon
			margin-left:-.05rem
			font-size:.18rem
</style>
