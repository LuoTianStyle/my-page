<template>
    <div :class="headerBar">
        <div class="wrap">
            <router-link to="/" class="logo"><img src="~img/logo.png" alt="GRAPHIC DESIGN" /></router-link>
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                <el-menu-item :class="elMenuItem" index="/"><span class="tips">主页</span></el-menu-item>
                <el-menu-item :class="elMenuItem" index="/work"><span class="tips">作品</span></el-menu-item>
                <el-menu-item :class="elMenuItem" index="/blog"><span class="tips">博客</span></el-menu-item>
                <el-menu-item :class="elMenuItem" index="/music"><span class="tips">音乐</span></el-menu-item>
                <el-menu-item :class="elMenuItem" index="/picture"><span class="tips">画廊</span></el-menu-item>
                <el-menu-item :class="elMenuItem" index="/me"><span class="tips">关于</span></el-menu-item>
                <el-menu-item :class="elMenuItem" index="/message"><span class="tips">留言墙</span></el-menu-item>
                <el-menu-item :class="elMenuItem" index="/github"><a href="https://github.com/LuoTianStyle" class="tips">GitHub</a></el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headerBar',
    props: {
        min: Boolean
    },
    data() {
        return {
            activeIndex: '/',
            headerBar: 'headerBar',
            elMenuItem: 'el-menu-item'
        }
    },
    watch: {
        min() {
            this.headerBar = this.headerBar === 'headerBar' ? 'headerBar min' : 'headerBar'
            this.elMenuItem = this.elMenuItem === 'el-menu-item' ? 'el-menu-item min' : 'el-menu-item'
        }
    },
    methods: {
        // 点击切换导航
        handleSelect(val) {
            if (val !== '/github') {
                this.activeIndex = val
                this.$router.push({ path: val })
            }
        }
    },
    mounted() {}
}
</script>

<style scoped lang="stylus">
.headerBar
    width 100%
    padding-top .2rem
    position fixed
    z-index 999
    background #fff
    top 0
    left 0
    transition-property padding, background
    .logo
        width auto
        height .4rem
        display block
        margin-right .5rem
        img
            height .4rem
    &.min
        padding-top .1rem
        background-color rgba(255, 255, 255, 0.92)
        box-shadow 0 .02rem .06rem rgba(0, 0, 0, 0.02)
    .wrap
        width 12rem
        margin auto
        display flex
        justify-content space-between
        .el-menu.el-menu--horizontal
            background-color transparent
            border 0
            .el-menu-item
                color #666
                height .5rem
                line-height .4rem
                box-sizing content-box
                padding 0 .2rem .1rem .2rem
                transition-property padding
                border none
                .tips::after
                    content ''
                    display block
                    margin-top -.14rem
                    transition all .3s ease-out 0s
                &:hover
                    color #000
                    cursor url('~img/click2.png'), default !important
                    .tips::after
                        width 100%
                        height .01rem
                        background #b3b3b3
                        margin-top -.06rem
                &.is-active
                    color #000
                    .tips::after
                        width 100%
                        height .01rem
                        background #b3b3b3
                        margin-top -.06rem
                &.min
                    padding-bottom 0
</style>
