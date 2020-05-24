<!-- home页 -->
<template>
    <div class="homeWrap">
        <!-- 显示遮罩 -->
        <leader-bar v-if="$store.state.routeNow !== '/'" />
        <!-- homePage -->
        <div class="homePage"><router-view :min="min" /></div>
        <!-- 返回顶部 -->
        <div class="toTop" :style="{ bottom: bottomValue }" @click="handleTotop"></div>
        <!-- 底部 -->
        <bottom-bar v-if="$store.state.routeNow !== '/' && $store.state.routeNow !== '/message' && $store.state.routeNow !== '/picture' && $store.state.routeNow !== '/me'" />
    </div>
</template>

<script>
import leaderBar from '@/components/common/leaderBar.vue'
import bottomBar from '@/components/common/bottomBar.vue'
import { mapMutations } from 'vuex'
import { WOW } from 'wowjs'
export default {
    name: 'Home',
    components: {
        leaderBar,
        bottomBar
    },
    data() {
        return {
            bottomValue: '100%',
            scrollTop: 0,
            min: false
        }
    },
    watch: {
        '$route.path': function(newValue, oldValue) {
            let parm = {
                page: oldValue,
                position: this.scrollTop
            }
            this.changescrollPositon(parm)
            let tmp
            this.$store.state.scrollPositon.forEach(o => {
                if (o.page === newValue) {
                    tmp = o.position
                }
            })
            this.scrollTop = tmp
            if (!this.scrollTop) {
                this.scrollTop = 0
            }
            this.scrollPosition(this.scrollTop)
            this.showWow()
        }
    },
    methods: {
        // vuex滚动条数值改变函数
        ...mapMutations(['changescrollPositon']),
        // 返回顶部
        handleTotop() {
            this.scrollPosition(0)
            this.showWow()
        },
        // 显示wow元素
        showWow() {
            if (document.getElementsByClassName('wow')[0] !== undefined) {
                let oWow = document.getElementsByClassName('wow')
                for (let i = 0; i < oWow.length; i++) {
                    oWow[i].style.visibility = 'visible'
                }
            }
        },
        // 滚动条位置
        scrollPosition(val) {
            window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = val
        },
        handleScroll() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (this.scrollTop > 80 && this.min === false) {
                this.min = true
            }
            if (this.scrollTop < 80 && this.min === true) {
                this.min = false
            }
            // 处理totopBar的显示与否
            if (this.scrollTop > 300 && this.bottomValue === '100%') {
                this.bottomValue = '2.5rem'
            }
            // 处理totopBar的显示与否
            if (this.scrollTop <= 300 && this.bottomValue === '2.5rem') {
                this.bottomValue = '100%'
            }
        }
    },
    mounted() {
        // wow初始化
        this.$nextTick(() => {
            // 在dom渲染完后,再执行动画
            var wow = new WOW({
                live: false
            })
            wow.init()
        })
        // 绑定滚动监听
        this.$nextTick(() => {
            window.addEventListener('scroll', this.handleScroll, true)
        })
    },
    destroyed() {
        // 销毁滚动监听
        window.addEventListener('scroll', this.handleScroll, true)
    }
}
</script>
<style scoped lang="stylus">
.homeWrap
    background-color hsla(40,33%,60%,.3)
.toTop
    cursor url('~img/click2.png'), default !important
    position fixed
    z-index 222
    width .7rem
    height 9rem
    right 0
    background-image url('~img/back-top.png')
    transition bottom 1s
</style>
