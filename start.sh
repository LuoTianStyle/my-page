cd /data/www
git clean -f
git reset --hard origin/master
git pull
sudo cnpm install
sudo npm run build
