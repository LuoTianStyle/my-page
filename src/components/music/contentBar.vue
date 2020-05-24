<template>
    <div class="contentBar">
        <div class="wrap">
            <div class="left">
                <ul class="list">
                    <li class="list-item" v-for="(item, index) of musicList" :key="index">
                        <img :src="item.Url" alt="" />
                        <div class="tipBox">
                            <span class="point"></span>
                            <span class="tips">{{ item.tips }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="music-item" v-for="(item, index) in musicData" :key="item.index" v-show="index % 2 !== 0">
                    <div class="wrapImg">
                        <img class="a" :src="item.Url" alt="" />
                        <div class="text">
                            <div class="name" v-text="item.name"></div>
                            <div class="time" v-text="item.time"></div>
                        </div>
                    </div>
                    <div class="innerImg"><img class="b" src="~/img/record.svg" alt="" /></div>
                </div>
                <div class="music-item right" v-for="(item, index) in musicData" :key="item.index" v-show="index % 2 === 0">
                    <div class="innerImg"><img class="b" src="~/img/record.svg" alt="" /></div>
                    <div class="wrapImg">
                        <img class="a" :src="item.Url" alt="" />
                        <div class="text">
                            <div class="name" v-text="item.name"></div>
                            <div class="time" v-text="item.time"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contentBar',
    components: {},
    props: {
        musicData: Array
    },
    data() {
        return {
            musicList: [
                {
                    Url: require('img/music1.png'),
                    tips: '纯音乐'
                },
                {
                    Url: require('img/music2.png'),
                    tips: '英文'
                },
                {
                    Url: require('img/music3.png'),
                    tips: '钢琴'
                },
                {
                    Url: require('img/music4.png'),
                    tips: '流行'
                },
                {
                    Url: require('img/music5.png'),
                    tips: '摇滚'
                },
                {
                    Url: require('img/music6.png'),
                    tips: '战歌'
                },
                {
                    Url: require('img/music7.png'),
                    tips: '民谣'
                },
                {
                    Url: require('img/music8.png'),
                    tips: '粤语'
                }
            ]
        }
    },
    created() {},
    methods: {},
    watch: {},
    mounted() {}
}
</script>

<style scoped lang="stylus">
.contentBar
    .wrap
        width 8rem
        margin 0 auto
        display flex
        font-family "PingFangSC-Regular", "Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei"
        .left
            width 2rem
            top 0
            left calc((100% - 8rem) / 2)
            position fixed
            height 100%
            box-sizing border-box
            .list
                margin-top .4rem
                .list-item
                    margin .2rem 0
                    height .6rem
                    text-align center
                    position relative
                    .tipBox
                        opacity 0
                        -webkit-transition all .5s
                        transition all .5s
                        pointer-events none
                        font-size .12rem
                        display block
                        position absolute
                        bottom .135rem
                        left 1.6rem
                        .tips
                            box-sizing border-box
                            background-color #c1866a
                            min-width .60rem
                            display inline-block
                            padding .10rem
                            text-align center
                            border-radius .04rem
                            color #fff
                        .point
                            position absolute
                            top .08rem
                            left -.13rem
                            display inline-block
                            background transparent
                            border .07rem solid transparent
                            border-right-color #c1866a
                    img
                        width .6rem
                        height .6rem
                        -moz-transition all .5s
                        -webkit-transition all .5s
                        transition all .5s
                    &:hover
                        img
                            transform scale(1.2)
                            -webkit-transform scale(1.2)
                            -moz-transform scale(1.2)
                        .tipBox
                            opacity 1
                            transform scale(1.2)
                            -webkit-transform scale(1.2)
                            -moz-transform scale(1.2)
        .content
            padding 0 .2rem .1rem .2rem
            margin-left 2rem
            .music-item
                margin-top .8rem
                height 3.2rem
                display flex
                .wrapImg
                    width 3.2rem
                    height 3.2rem
                    z-index 2
                    position relative
                    img
                        height 3.2rem
                    .text
                        width 100%
                        box-sizing border-box
                        position absolute
                        bottom 0
                        left 0
                        background rgba(0,0,0,.3)
                        padding-left .15rem
                        .name
                            margin .1rem 0 .06rem
                            font-size .2rem
                            color #fff
                            &:before
                                content url('~img/music-note.svg')
                                display inline-block
                                margin-right .1rem
                        .time
                            font-family Georgia
                            color #ccc
                            font-style italic
                            font-size .14rem
                            margin-bottom .08rem
                .innerImg
                    position relative
                    -webkit-transition all .5s
                    transition all .5s
                    top .16rem
                    left -1.74rem
                    width 2.88rem
                    img
                        height 2.88rem
                &:hover
                    .innerImg
                        left -1.34rem
                &.right
                    .innerImg
                        position relative
                        top .16rem
                        left 1.74rem
                        width 2.88rem
                        height 2.88rem
                    &:hover
                        .innerImg
                            left 1.34rem
</style>
