git checkout master
git pull

projectName="silverchat-website"

cd ~/$projectName/client
npm install --production
now=$(pm2 pid $projectName"_client")
if [ -z $now ]; 
then
pm2 start server.js --name $projectName"_client"
else
pm2 restart $projectName"_client"
fi