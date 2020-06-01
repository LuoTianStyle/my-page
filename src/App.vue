<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import { iconTitleChange } from '@/utils/iconTitle';
import { hearts } from '@/utils/clickHeart';
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
		hearts();
	},
	beforeDestroy() {
		window.removeEventListener('visibilitychange', this.iconTitleHandle);
	},
};
</script>
<style lang="css">
  .heart {
  width: 10px;
  height:
    10px;
  z-index: 999;
  position: fixed;
  background: #f00;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
}

.heart:after,
.heart:before {
  content: '';
  width: inherit;
  height: inherit;
  background: inherit;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  position: absolute;
}

.heart:after {
  top: -5px;
}

.heart:before {
  left: -5px;
}
</style>
<style scoped lang="stylus">
@import '~style/common.css'
#app
    font-family "Microsoft YaHei"
    font-size .12rem
    width 100%
    height 100vh
</style>
