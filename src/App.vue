<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style scoped lang="stylus">
@import '~style/common.css'
#app
    font-family "Microsoft YaHei"
    font-size .12rem
    width 100%
    height 100vh
</style>
