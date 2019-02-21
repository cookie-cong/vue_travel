<template>
  <div class="CityList" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="currentCity">
          <div class="current_wrap">
            <div class="current">{{this.$store.state.cities}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="currentCity">
          <div class="current_wrap" v-for="item of hot" :key="item.id" 
          @click="handleCityClick(item.name)">
            <div class="current">{{item.name}}</div>
          </div>
        
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key" >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="citys in item" :key="citys.id"  @click="handleCityClick(citys.name)">{{citys.name}}</div>
        
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: "CityList",
  props:{
    cities:Object,
    hot:Array,
    letter:String
  },
  mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true
      })
  },
  methods:{
    handleCityClick(data){
      
      this.$store.dispatch("handleCity",data);
      this.$router.push("/")
    }
  },

  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/common.styl';

.border-topbottom {
  &:before {
    background: #ccc;
  }

  &:after {
    background: #ccc;
  }
}

.border-bottom {
  &:before {
    background: #ccc;
  }
}

.CityList {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.currentCity {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.6rem;

  .current_wrap {
    width: 33.33%;
    float: left;

    .current {
      margin: 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}

.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>
 