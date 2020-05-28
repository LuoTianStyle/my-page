<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import { iconTitleChange } from '@/utils/iconTitle';
export default {
	name: 'App',
	methods: {
		iconTitleHandle() {
			iconTitleChange(this.$route.meta.title);
		},
	},
	mounted() {
		// 游览器标签页切换时修改title和icon事件
		document.addEventListener('visibilitychange', this.iconTitleHandle);
	},
	beforeDestroy() {
		window.removeEventListener('visibilitychange', this.iconTitleHandle);
	},
};
</script>

<style scoped lang="stylus">
@import '~style/common.css'
#app
    font-family "Microsoft YaHei"
    font-size .12rem
    width 100%
    height 100vh
</style>
