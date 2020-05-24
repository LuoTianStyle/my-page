<!-- index页-->
<template>
    <div class="indexPage" ref="indexPage">
        <header-bar :min="min" />
        <carousel-bar :carouselData="indexData.carousel" />
        <me-bar :meData="indexData.me" />
        <career-bar :careerData="indexData.career" />
        <blog-bar :blogData="indexData.blog" />
        <work-bar :workData="indexData.work" />
        <hobby-bar :hobbyData="indexData.hobby" />
        <connect-bar :connectData="indexData.connect" />
        <footer-bar :footerData="indexData.footer" />
    </div>
</template>

<script>
import headerBar from '@/components/index/headerBar.vue'
import carouselBar from '@/components/index/carouselBar.vue'
import meBar from '@/components/index/meBar.vue'
import workBar from '@/components/index/workBar.vue'
import blogBar from '@/components/index/blogBar.vue'
import careerBar from '@/components/index/careerBar.vue'
import hobbyBar from '@/components/index/hobbyBar.vue'
import connectBar from '@/components/index/connectBar.vue'
import footerBar from '@/components/index/footerBar.vue'
export default {
    name: 'Index',
    components: {
        headerBar,
        carouselBar,
        meBar,
        workBar,
        blogBar,
        careerBar,
        hobbyBar,
        connectBar,
        footerBar
    },
    props: {
        min: Boolean
    },
    data() {
        return {
            // 首页数据
            indexData: {
                carousel: [],
                me: {},
                career: [],
                blog: [],
                work: [],
                hobby: [],
                connect: {},
                footer: {}
            }
        }
    },
    mounted() {
        // 用户名
        let params = {
            users: 'Tianluoluo'
        }
        // axios拉取主页信息
        this.$axios.get('/indexdata', params).then(res => {
            this.indexData = res.data.indexdata
        })
    }
}
</script>
<style></style>
