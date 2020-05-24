<!-- 博客页-->
<template>
    <div class="blogPage" ref="blogPage">
        <content-bar />
        <footer-bar class="marginLeft" />
    </div>
</template>

<script>
import footerBar from '@/components/common/footerBar.vue'
import contentBar from '@/components/blog/contentBar.vue'
export default {
    name: 'Blog',
    components: {
        footerBar,
        contentBar
    }
}
</script>
<style scoped lang="stylus">
.blogPage
    padding-top .5rem
    min-height calc(100vh - 1.3rem)
    .marginLeft
        margin-left 2rem
</style>
