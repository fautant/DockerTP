docker run -d -p 8000:80 -p 8001:81 --name webserver imageweb

docker-compose up -d

docker cp ./sources/laravel webserver:/usr/app
docker cp ./sources/dist webserver:/usr/app/angular

docker exec -i webserver chmod 777 -R "//usr/app/laravel/storage"
docker exec -i webserver chmod 777 -R "//usr/app/laravel/bootstrap/cache"

