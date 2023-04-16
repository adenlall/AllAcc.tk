#!/usr/bin/env bash
echo "Running composer"
composer global require hirak/prestissimo
composer install --working-dir=/var/www/html

echo ".....npm....."
npm i
npm run development

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force
php artisan db:seed
php artisan db:seed Class=AdminSeeder
php artisan db:seed Class=AdminationSeeder
php artisan db:seed Class=DatabaseSeeder
php artisan db:seed Class=ConfigSeeder
php artisan db:seed Class=SkinsSeeder
php artisan db:seed Class=statisticSeeder