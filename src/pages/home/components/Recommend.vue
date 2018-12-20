<template>
    <div>
        <div class="recommend-title">
            -- 热销推荐 --
        </div>
        <ul>
            <li class="item border-bottom" v-for="item in RecommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-infor">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"HomeRecommend",
    data(){
        return{
            RecommendList:[
                {
                    id:"01",
                    imgUrl:"https://fuss10.elemecdn.com/7/f4/809def0555a227207c4b40ece86c7jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
                    title:"肯德基宅急送（西站北广场店)",
                    desc:"月售492单"
                },
                 {
                    id:"02",
                    imgUrl:"https://fuss10.elemecdn.com/6/99/f7632ddf340c264b30a73acadd328jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
                    title:"肯德基宅急送（西站北广场店)",
                    desc:"月售492单"
                },
                 {
                    id:"03",
                    imgUrl:"https://fuss10.elemecdn.com/d/f3/bce356cf494e152bee383d977aaafpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
                    title:"肯德基宅急送（西站北广场店)",
                    desc:"月售492单"
                },
                 {
                    id:"04",
                    imgUrl:"https://fuss10.elemecdn.com/7/f4/809def0555a227207c4b40ece86c7jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
                    title:"肯德基宅急送（西站北广场店)",
                    desc:"月售492单"
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixnis.styl'
    .recommend-title
        line-height :.8rem
        background :#eee
        // text-indent:.2rem
        margin-top:.2rem
        font-size:16px
        text-align :center
    .item
        display:flex
        height:1.9rem
        overflow:hidden
        .item-img
            width:1.7rem 
            height:1.7rem 
            padding:.1rem
        .item-infor
            flex:1
            padding:.1rem
            min-width:0
            .item-title
                line-height :.54rem
                font-size: 0.32rem
                ellipsis()
            .item-desc
                line-height :.4rem
                color:#ccc
                ellipsis()
            .item-btn
                line-height :.44rem
                margin-top:.16rem
                background:#ff9300
                padding:0 .2rem
                border-radius:0.06rem
                color:#fff
</style>
