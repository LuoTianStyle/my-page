<template>
    <div class="meBar">
        <div class="wrap">
            <div class="left">
                <div class="leader wow" data-wow-delay=".2s">
                    <p class="title">關於</p>
                    <p class="subtitle">About</p>
                </div>
                <router-link to="/me" class="me wow" data-wow-delay=".5s"><i class="angle-right"></i></router-link>
            </div>
            <div class="intro">
                <div class="img wow" :style="{ 'background-image': 'url(' + meData.img + ')' }"></div>
                <div class="text wow" v-text="meData.text"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'meBar',
    props: {
        meData: Object
    }
}
</script>

<style scoped lang="stylus">
.meBar
    overflow-y hidden
    height auto
    min-height 1rem
    background-color #f7f7f7
    .wrap
        width 12rem
        margin 0 auto
        padding-top 1.5rem
        display flex
        .leader
            padding-bottom .5rem
            animation-delay 0.2s
            animation-name fadeInUp
            .title
                font-family "SabonLTStd-Roman", "宋体"
                line-height .38rem
                height .38rem
                color #333
                font-size .24rem
            .subtitle
                height .26rem
                line-height .26rem
                color #c4c4c4
                font-family "Times New Roman"
                font-size .14rem
        .me
            position relative
            overflow hidden
            width .78rem
            height .18rem
            animation-delay 0.5s
            animation-name fadeInUp
            display block
            padding-top .05rem
            border-left .01rem solid rgb(231, 231, 231)
            .angle-right
                content ''
                display block
                width .15rem
                height .09rem
                top .02rem
                position absolute
                background: transparent url('~img/icon3.png') no-repeat scroll -1.1rem -.11rem
                margin .06rem 0 0 .15rem
                transition all .3s ease-out 0s
            &:hover
                border-left .01rem solid rgb(150, 150, 150)
                background transparent
                .angle-right
                    background: transparent url('~img/icon3.png') no-repeat scroll -1.1rem 0
        .img
            animation-name fadeInUp
            width 8.4rem
            height 2.3rem
            margin-left 1.62rem
            img
                height 2.3rem
        .text
            display inline-block
            padding .4rem 1.86rem 1.58rem 2.84rem
            width 6rem
            height .84rem
            line-height .28rem
            animation-delay 0.3s
            animation-name fadeInUp
            text-align left
            font-size .12rem
            overflow hidden
            color #848484
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 3
            -webkit-box-orient vertical
</style>
