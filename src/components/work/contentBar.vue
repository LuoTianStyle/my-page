<template>
    <div class="contentBar">
        <div class="wrap wow flipInX animated" v-for="item of contentList" :key="item.index">
            <div class="title">{{item.title}}</div>
            <div class="kinds">{{item.kinds}}</div>
            <div class="intro">{{item.intro}}</div>
            <div class="way"><img :src="item.way" alt="" /></div>
            <div class="down">
                <div class="left">下载次数：{{item.num}}</div>
                <div class="right">
                    <div class="btns">
                        <a href="" rel="nofollow" target="_blank" class="btn show hover">
                            <svg aria-hidden="true" class="icon">
                                <use xlink:href="#icon-yanshi">
                                    <svg id="icon-yanshi" viewBox="0 0 1024 1024" width="100%" height="100%">
                                        <path d="M967.2704 93.3888H548.4544V56.9344c0-20.0704-16.384-36.4544-36.4544-36.4544s-36.4544 16.384-36.4544 36.4544v36.4544H56.7296c-20.0704 0-36.4544 16.384-36.4544 36.4544v618.9056c0 20.0704 16.384 36.4544 36.4544 36.4544h166.912l-156.2624 156.2624c-14.1312 14.1312-14.1312 37.2736 0 51.4048 7.168 7.168 16.384 10.6496 25.8048 10.6496 9.216 0 18.6368-3.4816 25.8048-10.6496l207.872-207.872h370.8928L905.216 992.8704c7.168 7.168 16.384 10.6496 25.8048 10.6496s18.6368-3.4816 25.8048-10.6496c14.1312-14.1312 14.1312-37.2736 0-51.4048l-156.2624-156.2624h166.912c20.0704 0 36.4544-16.1792 36.4544-36.4544V129.6384c-0.2048-20.0704-16.384-36.2496-36.6592-36.2496zM92.9792 712.2944V166.0928h837.8368v546.2016H92.9792z m0 0"></path>
                                        <path d="M443.8016 334.848l156.8768 90.5216c13.7216 7.7824 13.7216 27.648 0 35.4304l-156.8768 90.5216c-13.7216 7.7824-30.72-2.048-30.72-17.8176V352.256c0-15.36 16.9984-25.1904 30.72-17.408z"></path>
                                    </svg>
                                </use>
                            </svg>
                            <span>效果演示</span>
                        </a>
                        <a class="btn btn-clear download hover">
                            <svg aria-hidden="true" class="icon">
                                <use xlink:href="#icon-32downloadcloudhower">
                                    <svg id="icon-32downloadcloudhower" viewBox="0 0 1463 1024" width="100%" height="100%">
                                        <path d="M36.556875 694.890636 36.556875 694.793151C36.556875 574.106719 118.541761 470.285193 235.426278 425.637063 233.476578 364.708937 255.508188 303.195901 300.936199 258.060346 360.012109 199.569345 443.06933 184.361685 514.623321 211.56 530.415892 184.361685 549.912892 158.820614 573.114322 135.814154 712.712844-2.517063 932.736492 4.501857 1064.243758 151.509239 1128.486374 223.355685 1159.681574 315.576496 1158.511754 407.114912 1310.490871 432.363528 1425.815628 551.685169 1425.815628 694.793151L1425.815628 694.890636C1425.815628 856.325798 1279.100701 987.443125 1098.558479 987.443125L363.814025 987.443125C183.271802 987.443125 36.556875 856.325798 36.556875 694.890636ZM793.625395 806.413477 939.852897 660.185975C954.085707 645.85568 954.085707 622.751735 939.852897 608.42144 925.522601 594.18863 902.418656 594.18863 888.088361 608.42144L804.25126 692.356026 804.25126 341.702477 731.234994 341.702477 731.234994 692.258541 647.397893 608.42144C633.067598 594.18863 609.963653 594.18863 595.633357 608.42144 581.400547 622.751735 581.400547 645.85568 595.633357 660.185975L741.860859 806.413477C756.191154 820.646287 779.2951 820.646287 793.625395 806.413477Z"></path>
                                        <path d="M0 694.890636C0 573.911749 71.651476 469.992738 175.862942 413.061497L200.526647 401.655752 202.281378 374.262467C210.957543 321.913021 235.231308 271.805731 275.102673 232.129335 335.835829 172.078574 418.600595 150.534389 495.223806 167.789234L499.220691 168.959054 511.991226 149.851994C522.714576 135.911639 534.510262 122.556194 547.378282 109.883144 701.892009-43.265793 946.091937-35.272023 1091.442074 127.235474 1153.345049 196.449825 1187.172345 282.626566 1193.801325 370.168097L1193.996295 378.551807 1224.996525 386.253122C1361.573012 432.266043 1462.372503 551.197744 1462.372503 694.890636 1462.372503 880.307108 1295.283211 1024 1098.558479 1024L363.814025 1024C166.991807 1024 0 880.307108 0 694.890636ZM1389.258752 694.890636C1389.258752 572.839414 1290.116506 466.093338 1152.467684 443.184363L1121.467454 438.115143 1121.954879 406.724972C1122.929729 323.667751 1094.659079 240.513045 1036.947958 175.880489 919.283561 44.373223 723.436194 38.329153 598.752877 161.842649 577.988572 182.50947 560.441272 205.51593 546.208462 229.984665L530.610862 256.79304 501.560331 245.777235C443.2643 223.64814 375.317255 235.833765 326.672239 284.088841 288.945544 321.523081 270.228423 372.995162 271.885668 424.564728L272.763033 450.495738 248.391783 459.854298C143.302952 500.018119 73.113751 591.751505 73.113751 694.890636 73.113751 832.441973 199.454312 950.886249 363.814025 950.886249L1098.558479 950.886249C1262.820706 950.886249 1389.258752 832.441973 1389.258752 694.890636Z"></path>
                                    </svg>
                                </use>
                            </svg>
                            <span>下载</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="data">{{item.data}}</div>
            <div class="github github-corner">
                <a href="https://github.com/LuoTianStyle" class="routerLink" style="fill: rgb(74, 183, 189); color: rgb(255, 255, 255);">
                    <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                        <path
                            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                            fill="currentColor"
                            class="octo-arm"
                            style="transform-origin: 130px 106px 0px;"
                        ></path>
                        <path
                            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                            fill="currentColor"
                            class="octo-body"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contentBar',
    components: {},
    props: {},
    data() {
        return {
            contentList: [
                {   
                    index: 1,
                    title: 'catsmile',
                    kinds: 'JavaScript,Css',
                    intro: '使用纯css绘制小猫笑脸，将小猫分为几部分，分别绘制，使用border-radius调整角度，使用hover来实现耳朵、眼睛动等效果',
                    way: require('img/zhuan.png'),
                    num: 46,
                    data: '2018-08-31'
                }, {
                    index: 2,
                    title: 'catsmile',
                    kinds: 'JavaScript,Css',
                    intro: '使用纯css绘制小猫笑脸，将小猫分为几部分，分别绘制，使用border-radius调整角度，使用hover来实现耳朵、眼睛动等效果',
                    way: require('img/luo.png'),
                    num: 46,
                    data: '2018-08-31'
                }, {
                    index: 3,
                    title: 'catsmile',
                    kinds: 'JavaScript,Css',
                    intro: '使用纯css绘制小猫笑脸，将小猫分为几部分，分别绘制，使用border-radius调整角度，使用hover来实现耳朵、眼睛动等效果, 使用纯css绘制小猫笑脸，将小猫分为几部分，分别绘制，使用border-radius调整角度，使用hover来实现耳朵、眼睛动等效果',
                    way: require('img/zhuan.png'),
                    num: 46,
                    data: '2018-08-31'
                }, {
                    index: 4,
                    title: 'catsmile',
                    kinds: 'JavaScript,Css',
                    intro: '使用纯css绘制小猫笑脸，将小猫分为几部分，分别绘制，使用border-radius调整角度，使用hover来实现耳朵、眼睛动等效果',
                    way: require('img/zhuan.png'),
                    num: 46,
                    data: '2018-08-31'
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
        width 5rem
        margin .3rem auto
        margin-top 0
        padding .1rem 0
        box-shadow 0 .05rem .15rem 0 rgba(0, 0, 0, .08)
        text-align center
        background-image url('~img/note-bg.jpg')
        font-family "PingFangSC-Regular", "Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei"
        position relative
        -webkit-transition box-shadow 1s
        transition box-shadow 1s
        .title
            text-align center
            font-weight bold
            color #db5640
            line-height .3rem
            font-size .24rem
        .kinds
            font-size .12rem
            line-height .2rem
            padding .08rem 0
        .intro
            width 70%
            height .9rem
            margin .15rem auto
            font-size .14rem
            text-align left
            line-height .3rem
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 3
            -webkit-box-orient vertical
        .way
            width 70%
            margin 0 auto
            text-align right
            margin-bottom -.25rem
            img
                width .3rem
        .down
            padding 0 .2rem
            margin-top .5rem
            font-size .14rem
            display flex
            align-items center
            justify-content space-between
            .left
            .right
                .btn
                    color #c1866a
                    margin-left .2rem
                    .icon 
                        width .14rem
                        height .14rem
                        vertical-align -.021rem
                        fill currentColor
                        overflow hidden
                    span
                        display inline-block
                        padding-left .05rem
        .data
            position absolute
            bottom .35rem
            left -.07rem
            width 1.5rem
            height .34rem
            text-align center
            line-height .34rem
            font-size .14rem
            background-image url('~img/date-bg3.svg')
            &:before
                content url('~img/date-bg1.svg');
                position absolute
                top 0
                right calc(100% - 11px)
                width 11px
                height 100%
            &:after
                content url('~img/date-bg2.svg')
                position absolute
                top 0
                left calc(100% - 1px)
                width 13px
                height 100%
        .github
            position absolute
            right 0
            top 0
            width .8rem
            height .8rem
            border 0
            &:hover
                .octo-arm
                    -webkit-animation octocat smile-wave 0.56s ease-in-out
                    animation octocat smile-wave 0.56s ease-in-out
        &:hover
            box-shadow .05rem .15rem .30rem .05rem rgba(0,0,0,.15)
</style>
<style>
@-webkit-keyframes octocat smile-wave {
    0%,
    to {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    20%,
    60% {
        -webkit-transform: rotate(-25deg);
        transform: rotate(-25deg);
    }
    40%,
    80% {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg);
    }
}
@keyframes octocat smile-wave {
    0%,
    to {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    20%,
    60% {
        -webkit-transform: rotate(-25deg);
        transform: rotate(-25deg);
    }
    40%,
    80% {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg);
    }
}
</style>
