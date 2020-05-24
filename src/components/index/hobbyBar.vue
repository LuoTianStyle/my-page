<template>
    <div class="hobbyBar">
        <div class="wrap">
            <div class="left">
                <div class="leader wow" data-wow-delay=".2s">
                    <p class="title">爱好</p>
                    <p class="subtitle">Hobby</p>
                </div>
                <router-link to="/" class="hobby wow" data-wow-delay=".5s"><i class="angle-right"></i></router-link>
            </div>
            <el-carousel trigger="click" arrow="never" class="carousel wow">
                <el-carousel-item v-for="(item,index) in hobbyData" :key="index" class="item">
                    <div class="text">
                        <div class="title">{{ item.title }}</div>
                        <div class="intro">{{ item.intro }}</div>
                    </div>
                    <div class="img"><img :src="item.src" alt="" /></div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hobbyBar',
    props: {
        hobbyData: Array
    }
}
</script>

<style scoped lang="stylus">
.hobbyBar
    height auto
    min-height 1rem
    background-color #F7F7F7
    overflow-y hidden
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
        .hobby
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
                background transparent url('~img/icon3.png') no-repeat scroll -1.1rem -.11rem
                margin .06rem 0 0 .15rem
                transition all .3s ease-out 0s
            &:hover
                border-left .01rem solid rgb(150, 150, 150)
                background transparent
                .angle-right
                    background transparent url('~img/icon3.png') no-repeat scroll -1.1rem 0
        .carousel
            width 10.46rem
            min-height 1rem
            margin-bottom .75rem
            overflow hidden
            margin-left 1rem
            animation-name fadeInUp
            /deep/.el-carousel__container
                height 2rem
                .item
                    display flex
                    .text
                        margin-top .15rem
                        width 8.46rem
                        height auto
                        clear both
                        .title
                            float left
                            width 1.5rem
                            border-right .01rem solid rgb(234, 234, 234)
                            padding-right .07rem
                            color #333
                            text-align left
                            font-size .18rem
                            margin-right .26rem
                            overflow hidden
                            text-overflow ellipsis
                            display -webkit-box
                            -webkit-line-clamp 1
                            -webkit-box-orient vertical
                        .intro
                            float left
                            width 5rem
                            text-align left
                            color #999
                            font-size .13rem
                            line-height .24rem
                            overflow hidden
                            text-overflow ellipsis
                            display -webkit-box
                            -webkit-line-clamp 3
                            -webkit-box-orient vertical
                    .img
                        width 1.5rem
                        height 1.5rem
                        margin-right .5rem
                        img
                            height 1.5rem
            /deep/.el-carousel__indicators
                padding 0
                width .05rem
                right 0
                left auto
                bottom 50%
                .el-carousel__indicator
                    .el-carousel__button
                        border .01rem solid rgba(0, 0, 0, .3)
                        width .04rem
                        height .04rem
                        background-color rgba(0, 0, 0, .3)
                        border-radius 100%
                        margin-right .1rem
                    &.is-active
                        .el-carousel__button
                            border .01rem solid #000
                            background-color #000
</style>
