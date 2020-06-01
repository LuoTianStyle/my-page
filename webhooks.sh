WEB_PATH='/data/wwww'
echo "开始执行shell"
cd $WEB_PATH
echo "pulling source code..."
git pull
echo "changing permissions..."
echo "git pull 完成"
echo "切换npm 版本"
nvm use v10
echo "开始 build"
npm run build
echo "build 完成"
