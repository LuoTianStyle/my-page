<template>
    <div class="carouselBar">
        <el-carousel trigger="click" height="750px" arrow="never" class="index">
            <el-carousel-item v-for="(item,index) in carouselData" :key="index" :class="item.bg"></el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'carouselBar',
    props: {
        carouselData: Array
    }
}
</script>

<style scoped lang="stylus">
.carouselBar
    height auto
    min-height 1rem
    .index1,
    .index2
        background-size cover
        background-position center
        width 100%
        &.index1
            background-image url('~img/index1.jpg')
        &.index2
            background-image url('~img/index2.jpg')
    /deep/.el-carousel__indicators
        top 45%
        left auto
        right .3rem
        width .2rem
        margin-top -.3rem
        li
            margin .1rem 0
            padding 0
            button
                margin 0 .05rem
                height .04rem
                width .04rem
                background-color #ddd
                border #ddd 1px solid
            &.is-active
                button
                    background-color #9b9b9b
                    border #9b9b9b 1px solid
</style>
