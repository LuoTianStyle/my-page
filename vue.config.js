const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	productionSourceMap: false,
	chainWebpack: config => {
		//修改文件引入自定义路径
		config.resolve.alias
			.set('@', resolve('src'))
			.set('img', resolve('src/assets/img'))
			.set('style', resolve('src/assets/style'));
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000/users/',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
};
