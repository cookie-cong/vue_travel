<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotcitys" :letter="letter"></city-list>
    <alphabet :cities="cities" @change="handleChangeL"></alphabet>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import Alphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  data() {
    return {
      cities: {},
      hotcitys: [],
      letter:""
    };
  },
  mounted() {
    this.getCity();
  },
  methods: {
    getCity() {
      axios.get("/api/city.json").then((res)=>{
            if (res.data.ret && res.data.data) {
          this.cities = res.data.data.cities;
          this.hotcitys = res.data.data.hotCities;
          console.log(this.hotcitys)
        }
      })
    },
    handleChangeL(letter){
      this.letter=letter
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
