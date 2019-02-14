<template>
    <div>
        <div class="CitySearch">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div class="search-content">123</div>
    </div>
</template>
<script>
export default {
    name:"CitySearch",
    data(){
        return{
            keyword:""
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "~styles/common.styl"
    .CitySearch
        height:.72rem
        padding:0 .1rem
        background :$bgColor
        .search-input
            box-sizing :border-box
            width: 100%
            padding:0 .1rem
            height:.62rem
            line-height:.62rem
            text-align:center
            border-radius :.06rem
            color:#666
    .search-content
        overflow: hidden 
        z-index:1
        position:absolute
        top:1.58rem
        left:0
        right:0
        bottom:0
        background:pink
            
            
</style>
 