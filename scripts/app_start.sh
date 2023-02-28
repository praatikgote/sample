#!/bin/bash

#_Change_Working_Directory
cd /home/ec2-user/server

#_Delete_Old_PM2_Service
#sudo pm2 delete Frontend
sudo pm2 save
#sudo pm2 start server.js --name Backend
#pm2 delete Frontend
sudo pm2 start server.js --name backend
sudo pm2 save
pm2 start -f scripts/app_start.sh


