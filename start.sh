cd /data/www
git clean -f
git reset --hard origin/master
git pull
cnpm install
npm run build
rm -rf node_modules