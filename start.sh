#!/bin/bash
php-fpm8.2 -D

sleep 5

chmod 777 /run/php/php8.2-fpm.sock

nginx -g "daemon off;"