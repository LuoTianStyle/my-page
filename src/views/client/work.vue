<!-- work页-->
<template>
    <div class="workPage">
        <content-bar />
        <footer-bar />
    </div>
</template>

<script>
import footerBar from '@/components/common/footerBar.vue'
import contentBar from '@/components/work/contentBar.vue'
import { WOW } from 'wowjs'
export default {
    name: 'Work',
    components: {
        footerBar,
        contentBar
    },
    data() {
        return {}
    },

    methods: {},
    mounted() {
        new WOW({ live: false }).init()
    }
}
</script>
<style scoped lang="stylus">
.workPage
    padding-top .5rem
    min-height calc(100vh - 1.3rem)
</style>
