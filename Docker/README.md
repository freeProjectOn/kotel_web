# docker-lemp

Run Nginx, php-fpm and MariaDB using [Docker]

## Requirements
Install [Docker] and [Compose]

## Usage
```
docker-compose up -d
docker-compose logs
docker-compose stop
docker-compose rm

In case you want restart all dockers

docker-compose stop
docker ps -a -q | xargs -n 1 -I {} docker rm {} && docker rmi $(docker images -f "dangling=true" -q)

```

=====================

[Docker]:                      https://www.docker.io/
[Compose]:                     http://docs.docker.com/compose/install/
