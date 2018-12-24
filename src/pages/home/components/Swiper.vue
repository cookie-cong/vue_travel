<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="swiperlist.length">
        <!-- slides -->
        <swiper-slide v-for="item in swiperlist" :key = "item.id">
            <img class="swiper-img" :src="item.imgUrl"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    name:'HomeSwiper',
    props:{
        swiperlist:Array
    },
    data(){
        return{
            swiperOption:{
                pagination:".swiper-pagination",//小圆点
                loop:true,
                autoplay:1500
            }
            // swiperList:[
            //     {
            //         id:"01",
            //         imgUrl:"https://fuss10.elemecdn.com/a/99/d183dac52e988e0df2c5c2fd0cebbjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
            //     },
            //     {
            //         id:"02",
            //         imgUrl:"https://fuss10.elemecdn.com/e/df/613a15027e25cf23d1be017e27b34jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
            //     },
            //     {
            //         id:"03",
            //         imgUrl:"https://fuss10.elemecdn.com/9/cb/8fceab1330cc38eee325568da2158jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
            //     },
            //     {
            //         id:"04",
            //         imgUrl:"https://fuss10.elemecdn.com/4/58/6898af2b1230eb5e193c4b2d15c56jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
            //     }
            // ]

        }
    }
}
</script>
<style lang="stylus" scoped>
    // .wrapper
    //     width:100%
    //     height :0
    //     overflow hidden
    //     padding-bottom :31.25%
    .wrapper >>> .swiper-pagination-bullet-active //修改小圆点的样式
        background:#fff
    .swiper-img
        width:100%
</style>
