<template>
    <div>
        <div class="recommend-title">
            -- 周末去哪儿 --
        </div>
        <ul>
            <li class="item border-bottom" v-for="item in RecommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-infor">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"HomeWeekend",
    data(){
        return{
            RecommendList:[
                {
                    id:"01",
                    imgUrl:"https://fuss10.elemecdn.com/4/98/c16e4db9ba0c7b37ea18324ab8d00jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/",
                    title:"肯德基宅急送（西站北广场店)",
                    desc:"月售492单"
                },
                 {
                    id:"02",
                    imgUrl:"https://fuss10.elemecdn.com/4/98/c16e4db9ba0c7b37ea18324ab8d00jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/",
                    title:"肯德基宅急送（西站北广场店)",
                    desc:"月售492单"
                },
                 {
                    id:"03",
                    imgUrl:"https://fuss10.elemecdn.com/4/98/c16e4db9ba0c7b37ea18324ab8d00jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/",
                    title:"肯德基宅急送（西站北广场店)",
                    desc:"月售492单"
                },
                 {
                    id:"04",
                    imgUrl:"https://fuss10.elemecdn.com/4/98/c16e4db9ba0c7b37ea18324ab8d00jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/",
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
        .item-img-wrapper
            height:0
            overflow:hidden
            padding-bottom :25.9%
            .item-img
                width:100%
        .item-infor
            padding:.1rem
            .item-title
                line-height :.54rem
                font-size: 0.32rem
                ellipsis()
            .item-desc
                line-height :.4rem
                color:#ccc
                ellipsis()
              
</style>
