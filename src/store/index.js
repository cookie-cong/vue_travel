import Vue from "vue"
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
       cities:"北京" 
    },
    actions:{
        handleCity(ctx,data){
            ctx.commit("handleCity",data)
            console.log(data)
        }
    },
    mutations:{
        handleCity(state,data){
            state.cities=data   
        }
    }
})