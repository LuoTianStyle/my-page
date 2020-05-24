<!-- work页-->
<template>
    <div class="mePage">
        <left-bar />
        <right-bar />
    </div>
</template>

<script>
import leftBar from '@/components/me/leftBar.vue'
import rightBar from '@/components/me/rightBar.vue'
export default {
    name: 'Me',
    components: {
        leftBar,
        rightBar
    },
    data() {
        return {}
    },

    methods: {},
    mounted() {}
}
</script>
<style scoped lang="stylus">
</style>
