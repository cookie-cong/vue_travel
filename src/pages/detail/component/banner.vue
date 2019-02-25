<template>
    <div>
        <div class="banner" @click="handleGalleryFlag">
            <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/312cf66d-f403-4b01-ace9-d40afd406cbe.jpg_r_640x420x90_cf520267.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    三亚湾红树林城市景观房
                </div>
                <div class="banner-number">
                    <span class="iconfont"></span>
                    1/10
                </div>
            </div>
        </div>
        <Gallery :imgs="imgs" v-show="galleryFlag" @close="handlegalleryClose"></Gallery>
    </div>
</template>
<script>
import Gallery from "../../../common/gallery/Gallery"
export default {
    data(){
      return{
        galleryFlag:false,
        imgs:['https://img1.qunarzz.com/p/tts9/1807/81/14284b50b91e8702.jpg_r_1280x840x90_ae260f8e.jpg',
        'https://img1.qunarzz.com/p/tts8/1807/d5/d5e9e0837b482d02.jpg_r_1280x840x90_d2bb86c9.jpg']
      }
    },
    components:{
      Gallery
    },
    methods:{
      handleGalleryFlag(){
        this.galleryFlag=true;
      },
      handlegalleryClose(){
        this.galleryFlag=false;
      }
    }
}
</script>
<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      justify-content :space-between
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
