<template>
    <div class="cityHeader">
        城市列表
        <router-link to="/home">
            <div class="iconfont city-icon">&#xe601;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"CityHeader"
}
</script>
<style lang="stylus" scoped>
@import "~styles/common.styl"
    .cityHeader 
        position :relative
        overflow :hidden
        height:.86rem
        line-height:.86rem
        background:$bgColor
        color:#fff
        text-align:center 
        font-size:.34rem
        .city-icon
            width:.64rem 
            text-align :center
            position:absolute
            top:0
            left:0
            color:#fff
            font-size:.4rem
            
</style>
 