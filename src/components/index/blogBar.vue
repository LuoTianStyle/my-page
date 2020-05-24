<template>
    <div class="blogBar">
        <div class="wrap">
            <div class="left">
                <div class="leader wow" data-wow-delay=".2s">
                    <p class="title">博客</p>
                    <p class="subtitle">Blogs</p>
                </div>
                <router-link to="/blog" class="blog wow" data-wow-delay=".5s"><i class="angle-right"></i></router-link>
            </div>
            <ul class="list">
                <li class="item wow" v-for="(item,index) in blogData" :key="index">
                   <router-link to="/" class="link">
                        <div class="main">
                            <div class="data">{{item.data}}</div>
                            <div class="mainTitle">{{item.title}}</div>
                        </div>
                        <div class="describe">{{item.desc}}</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
    name: 'blogBar',
    props: {
        blogData: Array
    },
    mounted() {
        new WOW({ live: false }).init()
    }
}
</script>

<style scoped lang="stylus">
.blogBar
    height auto
    min-height 1rem
    background-color #F7F7F7
    overflow-y hidden
    .wrap
        width 12rem
        margin 0 auto
        padding-top 1.5rem
        padding-bottom 1.2rem
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
        .blog
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
        .list
            margin-left 1.61rem
            width 8.7rem
            .item
                width 7.32rem
                margin-right .1rem
                animation-name fadeInUp
                margin-bottom .66rem
                .link
                    height 100%
                    width 100%
                    display block
                    .main
                        height .5rem
                        display flex
                        .data
                            border-right .01rem solid #c7c7c7
                            height .4rem
                            width .66rem
                            font-family "Times New Roman", "宋体"
                            font-size .22rem
                            color #595959
                            line-height .3rem
                            font-weight 200
                        .mainTitle
                            font-family "Times New Roman", "宋体"
                            width 6.4rem
                            font-size .18rem
                            height .5rem
                            overflow hidden
                            display block
                            line-height .32rem
                            padding-left .25rem
                            color #717171
                            text-overflow ellipsis
                            white-space nowrap
                    .describe
                        color #999
                        line-height .26rem
                        height .52rem
                        font-size .12rem
                        margin-left .92rem
                        width 6rem
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-line-clamp 2
                        -webkit-box-orient vertical
                        overflow hidden
                        word-break break-all
</style>