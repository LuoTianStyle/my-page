<template>
    <div class="workBar">
        <div class="wrap">
            <div class="left">
                <div class="leader wow" data-wow-delay=".2s">
                    <p class="title">作品</p>
                    <p class="subtitle">Work</p>
                </div>
                <router-link to="/work" class="work wow" data-wow-delay=".5s"><i class="angle-right"></i></router-link>
            </div>
            <ul class="list">
                <li class="items itemleft wow">
                    <div class="item" v-for="(item,index) in workData" :key="item.index" v-show="index%2!==0">
                        <router-link to="/" class="link">
                            <div class="img">
                                <img :src="item.src" alt="" />
                            </div>
                            <div class="introImg">
                                <div class="name">{{ item.name }}</div>
                                <div class="kinds">{{ item.kinds }}</div>
                                <i class="add"></i>
                            </div>
                        </router-link>
                    </div>
                </li>
                <li class="items itemright wow">
                    <div class="item" v-for="(item,index) in workData" :key="index" v-show="index%2===0">
                        <router-link to="/" class="link">
                            <div class="img">
                                <img :src="item.src" alt="" />
                            </div>
                            <div class="introImg">
                                <div class="name">{{ item.name }}</div>
                                <div class="kinds">{{ item.kinds }}</div>
                                <i class="add"></i>
                            </div>
                        </router-link>
                    </div>                    
                </li>      
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'workBar',
    props: {
        workData: Array
    }
}
</script>

<style scoped lang="stylus">
.workBar
    height auto
    min-height 4rem
    background-color #FFF
    overflow-y hidden
    .wrap
        width 12rem
        margin 0 auto
        padding-top 1.5rem
        display flex
        .leader
            padding-bottom .5rem
            animation-delay 0.2s
            animation-name fadeInDown
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
        .work
            position relative
            overflow hidden
            width .78rem
            height .18rem
            animation-delay 0.5s
            animation-name fadeInDown
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
            display flex
            overflow-x hidden
            .items
                .item
                    width 4.2rem
                    margin-right .1rem
                    display block
                    margin-bottom .39rem
                    .link
                        height 100%
                        width 100%
                        display block
                        .img
                            height 2.8rem
                            overflow hidden
                            width 100%
                            transition all ease-out .3s
                            img
                                width auto
                                height 2.8rem
                                transition all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s
                        .introImg
                            padding-top .06rem
                            position relative
                            top 0
                            transition all ease-out .6s
                            height .73rem
                            .name
                                font-family "Times New Roman", "宋体"
                                font-size .18rem
                                width 2.70rem
                                color #666
                                height .26rem
                                line-height .26rem    
                                text-align left
                                padding-top .15rem
                                margin-top 0
                                overflow hidden
                                text-overflow ellipsis
                            .kinds
                                width 2.70rem
                                color #999
                                display block
                                height .20rem
                                line-height .20rem
                                overflow hidden
                                text-align left
                                margin-top 0
                                padding-left 0
                            .add
                                position absolute
                                background url('~img/icon3.png') no-repeat 0 -1.6rem
                                height .25rem
                                line-height .25rem
                                width .25rem
                                top .38rem
                                right .5rem
                    &:hover
                        .img
                            img
                                transform scale(1, 1)
                                margin-top -.2rem
                        .introImg
                            top -.2rem
                            height .74rem
                &.itemleft
                    animation-name fadeInLeft
                &.itemright
                    animation-name fadeInRight
    </style>