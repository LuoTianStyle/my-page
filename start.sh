## 进入博客目录
echo '进入博客目录'
cd /data/www
## 拉取最新代码
echo '开始拉去最新代码'
git pull
## 安装静态包
cnpm i
## 打包静态文件
echo '开始构建静态文件'
npm run build
echo '最新文章处理完成'