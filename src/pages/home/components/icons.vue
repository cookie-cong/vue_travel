<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of iconlist" :key="item.id">
                    <div class="icon-img">
                        
                            <img class="icon-img-content" :src="item.imgUrl"/>
                        
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>
            <!-- <swiper-slide>
            <div class="icon">
                <div class="icon-img">
                        
                            <img class="icon-img-content" src="//s.qunarzz.com/vacation_react/freetrip/visa.png"/>
                        
                        <p class="icon-desc">热门景点</p>
                    </div>
                </div>
            </swiper-slide> -->
        </swiper>
            <!-- <div class="icon">
                <div class="icon-img">
                    
                        <img class="icon-img-content" src="//s.qunarzz.com/vacation_react/freetrip/jingjiu.png"/>
                    
                    <p class="icon-desc">热门景点</p>
                </div>
            </div>
            <div class="icon">
                <div class="icon-img">
                    
                        <img class="icon-img-content" src="//s.qunarzz.com/vacation_react/freetrip/local.png"/>
                    
                    <p class="icon-desc">热门景点</p>
                </div>
            </div>
            <div class="icon">
                <div class="icon-img">
                    
                        <img class="icon-img-content" src="//s.qunarzz.com/vacation_react/freetrip/ticket.png"/>
                    
                    <p class="icon-desc">热门景点</p>
                </div>
            </div>
            <div class="icon">
                <div class="icon-img">
                    
                        <img class="icon-img-content" src="//s.qunarzz.com/vacation_react/freetrip/jijiu.png"/>
                    
                    <p class="icon-desc">热门景点</p>
                </div>
            </div>
            <div class="icon">
                <div class="icon-img">
                    
                        <img class="icon-img-content" src="//s.qunarzz.com/vacation_react/freetrip/jijiu.png"/>
                    
                    <p class="icon-desc">热门景点</p>
                </div>
            </div>
            <div class="icon">
                <div class="icon-img">
                    
                        <img class="icon-img-content" src="//s.qunarzz.com/vacation_react/freetrip/jijiu.png"/>
                    
                    <p class="icon-desc">热门景点</p>
                </div>
            </div> -->
    </div>
</template>
<script>
export default {
    name:"HomeIcons",
    props:{
        iconlist:Array
    },
    data(){
        return{
            swiperOption:{
                autoplay:false
            }
            // iconList:[
            //     {
            //         id:"01",
            //         imgUrl:"//s.qunarzz.com/vacation_react/freetrip/jijiu.png",
            //         desc:"热门景点"
            //     },
            //     {
            //         id:"02",
            //         imgUrl:"//s.qunarzz.com/vacation_react/freetrip/visa.png",
            //         desc:"热门景点"
            //     }, 
            //     {
            //         id:"03",
            //         imgUrl:"//s.qunarzz.com/vacation_react/freetrip/jingjiu.png",
            //         desc:"热门景点"
            //     },
            //     {
            //         id:"04",
            //         imgUrl:"//s.qunarzz.com/vacation_react/freetrip/local.png",
            //         desc:"热门景点"
            //     },
            //     {
            //         id:"05",
            //         imgUrl:"//s.qunarzz.com/vacation_react/freetrip/ticket.png",
            //         desc:"热门景点"
            //     },
            //     {
            //         id:"06",
            //         imgUrl:"//s.qunarzz.com/vacation_react/freetrip/jijiu.png",
            //         desc:"热门景点"
            //     },
            //     {
            //         id:"07",
            //         imgUrl:"//s.qunarzz.com/vacation_react/freetrip/jijiu.png",
            //         desc:"热门景点"
            //     },
            //     {
            //         id:"08",
            //         imgUrl:"//s.qunarzz.com/vacation_react/freetrip/jijiu.png",
            //         desc:"热门景点"
            //     }                     

            // ]
        }
    },
    computed:{
        pages(){
            const pages = [];
            this.iconlist.forEach((item,index)=>{
                const page = Math.floor(index / 8);
                if(!pages[page]){
                    pages[page]=[];
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
@import  '~styles/mixnis.styl'  
    .icons >>> .swiper-container  
        height:0
        padding-bottom :50%
    
    .icon
            float:left
            position:relative
            overflow:hidden
            width:25%
            height:0
            padding-bottom :25%

            .icon-img
                position:absolute
                top:0
                left:0
                right:0
                bottom 0.44rem
                box-sizing :border-box
                padding:.1rem
            .icon-img-content
                height:100%
                display:block
                margin:0 auto
            .icon-desc
                text-align :center
                height:.44rem
                line-height:.48rem
                color:#333 
                ellipsis() 


</style>
