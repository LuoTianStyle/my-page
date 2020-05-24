<template>
    <div class="footerBar">
        <div class="end">end</div>
    </div>
</template>

<script>
export default {
    name: 'footerBar',
    components: {},
    props: {},
    data() {
        return {};
    },
    created() {},
    methods: {},
    watch: {},
    mounted() {}
};
</script>

<style scoped lang="stylus">
.footerBar 
    font-size .16rem
    margin .1rem 0
    text-align center
    .end
        color #bba477
        position relative
        display inline-block
        &:before
            content ""
            position absolute
            width 2rem
            max-width 2rem
            height .01rem
            background #bba477
            top 50%
            right calc(100% + 10px)
        &:after
            content ""
            position absolute
            width 2rem
            max-width 2rem
            height .01rem
            background #bba477
            top 50%
            left calc(100% + 10px)
</style>
