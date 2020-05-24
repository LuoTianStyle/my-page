<template>
    <div class="footerBar">
        <p>
            <span>{{ footerData.kinds }}.</span>
            <span class="dev" v-text="footerData.dev">技术支持</span>
            <span class="logo" v-text="footerData.logo">个人开发</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'footerBar',
    props: {
        footerData: Object
    }
}
</script>

<style scoped lang="stylus">
.footerBar
    background-color #fff
    position relative
    text-align center
    z-index 2
    p
        width 12rem
        margin 0 auto
        display inline-block 
        text-align center
        margin 0 auto
        color #D2D2D2
        padding .15rem .2rem
        .dev
            margin-left .2rem
        .logo
            margin-left .1rem
            margin-right .4rem
</style>
