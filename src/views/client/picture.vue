<!-- pictureÒ³¡ª-->
<template>
    <div class="picturePage">
        <content-bar />
    </div>
</template>

<script>
import contentBar from '@/components/picture/contentBar.vue'
export default {
    name: 'Picture',
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
.picturePage
    height 100vh
    width 100%
</style>
