<!-- musicҳ-->
<template>
    <div class="musicPage">
        <content-bar :musicData="musicData" />
        <footer-bar />
    </div>
</template>

<script>
import footerBar from '@/components/common/footerBar.vue'
import contentBar from '@/components/music/contentBar.vue'
import { WOW } from 'wowjs'
export default {
    name: 'Work',
    components: {
        footerBar,
        contentBar
    },
    data() {
        return {
            musicData: [
                {
                    name: 'Maps',
                    time: '2017-02-22',
                    Url: require('img/Maps.jpg')
                },
                {
                    name: 'Maps',
                    time: '2017-02-22',
                    Url: require('img/SomethingJustLikeThis.jpg')
                }
            ]
        }
    },

    methods: {},
    mounted() {
        new WOW({ live: false }).init()
    }
}
</script>
<style scoped lang="stylus">
.musicPage
    min-height calc(100vh - .8rem)
</style>
