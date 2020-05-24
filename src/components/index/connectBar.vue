<template>
    <div class="connectBar">
        <div class="wrap">
            <div class="left wow" data-wow-delay=".1s">
                <div class="title">
                    <div class="c">聯系</div>
                    <div class="e">Contact</div>
                </div>
                <div class="way">
                    <div class="text">关注</div>
                    <div class="wayto">
                        <i class="el-icon-phone"></i>
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-location"></i>
                    </div>
                </div>
            </div>
            <div class="right wow" data-wow-delay=".2s">
                <div class="allLeft">
                    <div class="w">{{connectData.w}}</div>
                    <div class="add">地址：{{connectData.add}}</div>
                    <div class="weChat">微信号：{{connectData.weChat}}</div>   
                    <div class="qq">QQ：{{connectData.qq}}</div>
                </div>
                <div class="allRight">
                    <div class="num">邮编：{{connectData.num}}</div>
                    <div class="tel">手机号：{{connectData.tel}}</div>
                    <div class="email">邮箱：{{connectData.email}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'connectBar',
    props: {
        connectData: Object
    }
}
</script>

<style scoped lang="stylus">
.connectBar
    overflow-x hidden
    overflow-y hidden
    background-color #f3f3f3
    background-image url('~img/bgconnect.jpg')
    background-position center .54rem
    background-attachment fixed
    background-size cover
    padding 1.7rem 0 2.1rem
    height auto
    .wrap
        width 12rem
        margin 0 auto
        display flex
        height 1.3rem
        .left
            display flex
            width 4.8rem
            animation-delay 0.1s
            animation-name fadeInLeft
            .title
                color #333
                text-align left
                .c
                    font-family "SabonLTStd-Roman", "宋体"
                    line-height .38rem
                    height .38rem
                    color #333
                    font-size .24rem
                .e
                    font-family "Times New Roman"
                    font-size .14rem
                    color #c1c1c1
                    height .26rem
                    line-height .26rem
            .way
                padding-left 1.85rem
                .text
                    color #696969
                    height .2rem
                    font-size .16rem
                    line-height .2rem
                .wayto
                    margin-top .35rem
                    i
                        background-color transparent
                        color #9b9b9b
                        font-size .16rem
                        border .02rem solid rgba(0, 0, 0, 0)
                        width .3rem
                        height .3rem
                        display inline-block
                        margin-right .1rem
                        margin-top .07rem
                        text-align center
                        color #BFBFBF
                        border-radius .15rem
                        transition all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s
                        &:hover
                            color #666
                        
        .right
            display flex
            flex 1
            animation-delay 0.2s
            animation-name fadeInRight
            .allLeft
                width 3.85rem
                .w
                    color #989898
                    font-size .16rem
                    line-height .2rem
                    margin-bottom .34rem
                .add
                .weChat
                .qq
                    padding-right .6rem
                    margin-top .14rem
                    height auto
                    color #999
                    font-size .12rem
            .allRight
                flex 1
                margin-top .4rem
                .num
                .tel
                .email
                    padding-right .6rem
                    margin-top .14rem
                    height auto
                    color #999
                    font-size .12rem
</style>
