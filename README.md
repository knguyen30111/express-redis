# express-redis

## curl

```sh
curl -v -X POST localhost:3500/register -H 'Content-Type: application/json'\
  -d '{ "email": "nguyen.le@zeals.co.jp", "name": "Nguyen", "password": "secret31", "passwordConfirmation": "secret31"}'

```

```sh
docker exec -it express-auth_db_1 mongo -u admin -p secret auth

docker exec -it express-auth_cache_1 redis-cli -a secret
```