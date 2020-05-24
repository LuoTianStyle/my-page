<!-- work页-->
<template>
    <div class="messagePage">
        <content-bar />
    </div>
</template>

<script>
import contentBar from '@/components/message/contentBar.vue'
export default {
    name: 'Message',
    components: {
        contentBar
    },
    data() {
        return {}
    },
    methods: {},
    mounted() {}
}
</script>
<style scoped lang="stylus">
.messagePage
    min-height 100vh
    width 100%
    background-image url("~img/wall.png")
</style>
