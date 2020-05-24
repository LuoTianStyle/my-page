<template>
    <div class="bottomBar">
        <p class="visitors">大神到访数：{{num}}</p>
        <p class="slogen">All or Nothing， Now or Never</p>
    </div>
</template>

<script>
export default {
    name: 'bottomBar',
    data () {
        return {
            num: 6001
        }
    }
}
</script>

<style scoped lang="stylus">
@import '~style/variable.styl'
.bottomBar
    width 100%
    box-sizing border-box
    height .8rem
    text-align center
    padding .2rem 0
    .visitors
        font-size .14rem
        color $ftycolor
    .slogen
        font-size .2rem
        color $ftycolor
        font-family Georgia
        font-style italic
</style>
