<template>
    <div class="Alphabet">
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
    </div>
</template>
<script>
export default {
    name:"Alphabet",

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