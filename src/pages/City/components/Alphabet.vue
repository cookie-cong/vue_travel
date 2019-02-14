<template>
    <div class="Alphabet">
        <div class="item"
         v-for="item in letters" 
         :key="item" 
         :ref="item"
         @touchstart ="handleTouchStart"
         @touchmove = "handleTouchMove"
         @touchend = "handleTouchEnd"
         @click="handleclick">
         {{item}}
         </div>
      
    </div>
</template>
<script>
export default {
    name:"Alphabet",
    data(){
        return {
            touchStatus:"",
            timer:null
        }
    },
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters = [];
            for(let i in this.cities){
                letters.push(i);
            }
            return letters
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop;
    },
    methods:{
        handleclick(e){
            this.$emit("change",e.target.innerText);

        },
        handleTouchStart(){
            this.touchStatus=true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY-79;
                    const index = Math.floor((touchY-this.startY)/20);
                    if(index>=0 && index<=this.letters.length){
                        this.$emit("change",this.letters[index])
                }
                },16)
              

            }
        },
        handleTouchEnd(){
            this.touchStatus=false
        }
    }

}
</script>
<style lang="stylus" scoped>
@import "~styles/common.styl"
    .Alphabet 
        display:flex
        flex-direction :column
        justify-content:center
        position :absolute
        top:1.58rem 
        right:0
        bottom:0
        width:.4rem
        .item 
            line-height:.4rem 
            color:skyblue
            text-align:center
            

            
</style>