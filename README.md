# express-redis

## curl

```sh
curl -v -X POST localhost:3500/register -H 'Content-Type: application/json'\
  -d '{ "email": "nguyen.le@zeals.co.jp", "name": "Nguyen", "password": "secret31", "passwordConfirmation": "secret31"}'

```