

# Nodejs API

## Get source code

```bash
$git clone blah
```

## Build source

```bash
$nvm --version
0.33.2
$cat .nvmrc
8.11.4
$nvm list
$nvm install 8.11.4
$nvm use
$node -v
v8.11.4
$npm install
$yarn
```

## Run Unit tests (jest) / integration tests (supertest)

```bash
$yarn test
$npm run test
```

## Run test coverage

```bash
$yarn coverage
```

- [test coverage report adjust path to the base of your repository] (file:///GitRepo/node-js-api/coverage/lcov-report/index.html)

## Run API (use nodemon for hot reloading)

```bash
$yarn start
$npm run start
```

## API Spec - testing with curl/postman

We need to provide the below capabilities:
-	get all phone numbers: (GET phone-numbers)

```json
$ curl localhost:3000/phone-numbers

{
    "phoneNumbers": [
        { "phoneNumber": "0434567890", "customer": "Telstra", "activated": false },
        { "phoneNumber": "0444567890", "customer": "Optus", "activated": false },
        ...
    ]
}
```
-	get all phone numbers of a single customer: (GET phone-numbers?customer=`<customer>`)

```json
$ curl localhost:3000/phone-numbers?customer=Telstra

{
    "phoneNumbers": [
        { "phoneNumber": "0434567890", "customer": "Telstra", "activated": false },
        { "phoneNumber": "0434567891", "customer": "Telstra", "activated": false },
        ...
    ]
}
```

-	activate a phone number: (PATCH phone-numbers/`<phoneNumber>`) `body { "activated": true }`

```json
$ curl --header "Content-Type: application/json" \
  --request PATCH \
  --data '{ "activated": true }' \
  localhost:3000/phone-numbers/0434567890

{ "phoneNumber": "0434567890", "customer": "Telstra", "activated": true }
```

- request a single phone number: (GET phone-numbers/`<phoneNumber>`)

```json
$ curl localhost:3000/phone-numbers/0434567890

{ "phoneNumber": "0434567890", "customer": "Telstra", "activated": true }
```
