<template>
    <div>
        <home-header :city="city"></home-header>
       <home-swiper :swiperlist="swiperList"></home-swiper>
       <home-icons :iconlist="iconList"></home-icons>
       <home-recommend :RecommendList="RecommendList"></home-recommend>
       <home-weekend :WeekendList="WeekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    mounted(){
        this.getHomeData()
    },
    data(){
        return {
            city:"",
            swiperList:[],
            iconList:[],
            RecommendList:[],
            WeekendList:[]
        }
    },
    methods:{
        getHomeData(){
            axios.get("/api/index.json").then((res)=>{
                console.log(res)
                console.log(res.data.data)
              if(res.data.ret && res.data.data){
                  this.city = res.data.data.city
                  this.swiperList = res.data.data.swiperList
                   this.iconList = res.data.data.iconList
                   this.RecommendList = res.data.data.RecommendList
                   this.WeekendList = res.data.data.WeekendList
                  
              }

            })
        }
    }
}
</script>
<style>

</style>