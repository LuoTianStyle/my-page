
echo '进入目录'
cd /data/www
echo '开始拉去最新代码'
git pull
echo '安装静态包'
cnpm i
echo '开始构建静态文件'
npm run build
echo '完成'