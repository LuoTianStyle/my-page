echo '进入项目目录'
cd /data/www
echo '分支'
git clean -f
git reset --hard origin/master
echo '拉取代码'
git pull
echo '安装'
cnpm install
echo '构建'
npm run build
echo '删除modules'
rm -rf node_modules
echo '完成'