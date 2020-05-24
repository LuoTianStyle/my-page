<template>
    <div class="mao">
        <div class="mao_head">
            <div class="huawen">
                <div><!--头部花纹——左边橙色--></div>
            </div>
        </div>
        <div class="erduo">
            <div></div>
            <div></div>
        </div>
        <div class="yanjing">
            <div>
                <div class="yanquan"><div></div></div>
                <div class="yanquan_hedding"></div>
                <div class="hong"></div>
            </div>
            <div class="yan_right">
                <div class="yanquan"><div></div></div>
                <div class="yanquan_hedding"></div>
                <div class="hong"></div>
            </div>
            <div style="clear:both"></div>
        </div>
        <div class="face_huawen">
            <div class="face_huawen_huawen huawen_left">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="face_huawen_huawen huawen_right">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div style="clear:both"></div>
        </div>
        <div class="bizi">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="zuiba_box">
            <div class="zuiba">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'maoBar'
}
</script>

<style lang="stylus" scoped>
.mao
    position relative
    animation buddha-translate 3s linear infinite
    -webkit-animation buddha-translate 3s linear infinite
    margin 0 auto
    width 2.3rem
    .mao_head
        margin 0 auto
        width 2rem
        height 1.7rem
        background #F6F7F2
        position relative
        border-radius 50% 50% 35% 35%
        border solid 2px #2e2e2e
        overflow hidden
        z-index 10
        .huawen
            position absolute;
            height .8rem
            width .9rem
            background #8D8D8D;
            left .55rem
            border-radius 0% 0% 50% 50%
            overflow hidden
            div:first-child
                height .8rem
                width .45rem
                background #F0AC6B
    .erduo
        width 1.87rem
        height .60rem
        position absolute
        top -.03rem
        left 50%
        margin-left -.935rem
        border-radius 0% 0% 0% 0%
        div:first-child
            height 1rem
            width .8rem
            border .02rem solid #2e2e2e
            background #f3f3f3
            transform rotate(-15deg)
            -ms-transform rotate(-15deg)
            -moz-transform rotate(-15deg)
            -webkit-transform rotate(-15deg)
            -o-transform rotate(-15deg)
            border-radius 4% 80% 0% 50%
            position absolute
            left -.1rem
            top 0
            transition transform 1s, left 1s
        div:last-child
            height 1rem
            width .8rem
            border .02rem solid #2e2e2e
            background #f3f3f3
            transform rotate(15deg)
            -ms-transform rotate(15deg)
            -moz-transform rotate(15deg)
            -webkit-transform rotate(15deg)
            -o-transform rotate(15deg)
            border-radius 80% 4% 50% 0%
            position absolute
            right -.1rem
            top 0
            transition transform 1s, right 1s
    .yanjing
        height .3rem
        width 1.5rem
        position absolute
        top 1rem
        z-index 20
        left 50%
        margin-left -.75rem
        overflow hidden
        .yanquan
            height .5rem
            width .5rem
            border .02rem solid #2e2e2e
            border-radius 50% 50% 50% 50%
            overflow hidden
            position absolute
            div:first-child
                height .5rem
                width .15rem
                background-color #2e2e2e
                margin-left .175rem
                transition all 1s
        .yanquan_hedding
            height .5rem
            width .9rem
            border-top .02rem solid #2e2e2e
            border-radius 50% 50% 50% 50%
            background #F6F7F2
            margin-top .25rem
            margin-left -.2rem
            position absolute
            transition margin-top 1s
        .hong
            position absolute
            height .14rem
            width .35rem
            background red;
            top .17rem
            left .09rem
            border-radius 50% 50% 50% 50%
            background-image -moz-radial-gradient( 50% 50%, rgba(253, 214, 240, 0.8) 0%, rgba(253, 224, 244, 0.8) 66%, rgba(253, 234, 247, 0.8) 100%)
            background-image -webkit-radial-gradient( 50% 50%, rgba(253, 214, 240, 0.8) 0%, rgba(253, 224, 244, 0.8) 66%, rgba(253, 234, 247, 0.8) 100%)
            background-image -ms-radial-gradient( 50% 50%, rgba(253, 214, 240, 0.8) 0%, rgba(253, 224, 244, 0.8) 66%, rgba(253, 234, 247, 0.8) 100%)
            opacity 0.0
        .yan_right
            left .98rem
            top 0
            background red
            position absolute
    .face_huawen
        height .4rem
        width 2rem
        position absolute
        top 1.05rem
        z-index 20
        left 50%
        margin-left -1rem
        .face_huawen_huawen
            div:first-child
                width .15rem
                height .05rem
                border-top .015rem #E53941 solid
                border-radius 30% 80% 20% 50%
                transform rotate(25deg)
                -ms-transform rotate(25deg)
                -moz-transform rotate(25deg)
                -webkit-transform rotate(25deg)
                -o-transform rotate(25deg)
                margin-left .1rem
            div:nth-child(2)
                width .1rem
                height .015rem
                background-color #E53941
                border-radius 50% 50% 50% 50%
                transform rotate(25deg)
                -ms-transform rotate(25deg)
                -moz-transform rotate(25deg)
                -webkit-transform rotate(25deg)
                -o-transform rotate(25deg)
                margin-left .1rem
            div:nth-child(3)
                width .16rem
                height .05rem
                border-bottom .02rem #E53941 solid
                border-radius 30% 0% 90% 30%
                transform rotate(25deg)
                -ms-transform rotate(25deg)
                -moz-transform rotate(25deg)
                -webkit-transform rotate(25deg)
                -o-transform rotate(25deg)
                margin-left .04rem
            div:nth-child(4)
                margin-top .1rem
                width .13rem
                height .1rem
                border-bottom .02rem #E53941 solid
                border-radius 30% 0% 90% 30%
                transform rotate(30deg)
                -ms-transform rotate(30deg)
                -moz-transform rotate(30deg)
                -webkit-transform rotate(30deg)
                -o-transform rotate(30deg)
                margin-left .14rem
            div:last-child
                width .11rem
                height .05rem
                border-bottom .015rem #E53941 solid
                border-radius 0% 0% 50% 50%
                transform rotate(-15deg)
                -ms-transform rotate(-15deg)
                -moz-transform rotate(-15deg)
                -webkit-transform rotate(-15deg)
                -o-transform rotate(-15deg)
                margin-left .2rem
                margin-top -.04rem
            &.huawen_right
                float right
                transform rotateY(180deg)
                -webkit-transform rotateY(180deg)
                -moz-transform rotateY(180deg)
                margin-top -.425rem
    .bizi
        width .15rem
        height .18rem
        position absolute
        left 50%
        margin-left -.075rem
        top 1.3rem
        z-index 30
        div:first-child
            width .15rem
            height .05rem
            border-bottom .04rem solid #2e2e2e
            border-radius 0% 0% 50% 50%
            margin-top -.05rem
    .zuiba_box
        width 1rem
        height .18rem
        position absolute
        overflow hidden
        left 50%
        margin-left -.5rem
        top 1.3rem
        z-index 30
        .zuiba
            margin-left .425rem
            margin-top .03rem
            div:first-child
                width .02rem
                height .04rem
                background #2e2e2e
                margin-left .075rem
            div:nth-child(2)
                width .25rem
                height .2rem
                border-bottom .02rem solid #2e2e2e
                border-left .02rem solid #2e2e2e
                border-radius 40% 0% 20% 50%
                margin-left .065rem
                margin-top -.13rem
                position absolute
                transition border-radius 1s
            div:nth-child(3)
                width .25rem
                height .2rem
                border-bottom .02rem solid #2e2e2e
                border-right .02rem solid #2e2e2e
                border-radius 0% 40% 50% 20%
                margin-left -.19rem
                margin-top -.13rem
                position absolute
                transition border-radius 1s
    &:hover
        .erduo
            div:first-child
                left -.05rem
                transform rotate(0deg)
                -ms-transform rotate(0deg)
                -moz-transform rotate(0deg)
                -webkit-transform rotate(0deg)
                -o-transform rotate(0deg)
                border-radius 4% 80% 0% 60%
            div:last-child
                right -.05rem
                transform rotate(0deg)
                -ms-transform rotate(0deg)
                -moz-transform rotate(0deg)
                -webkit-transform rotate(0deg)
                -o-transform rotate(0deg)
                border-radius 80% 4% 60% 0%
        .yanquan
            div:first-child
                width .2rem
                margin-left .15rem
        .yanquan_hedding
            margin-top .15rem
        .hong
            opacity 0.8
            transition opacity 0.5s ease-in 0.2s
        .zuiba
            div:nth-child(2)
                border-radius 50% 50% 50% 50%
                width .2rem
            div:nth-child(3)
                width .2rem
                margin-left -.15rem
                border-radius 50% 50% 50% 50%
</style>
