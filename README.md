

## WonderQ

  <p align="center">WonderQ is a broker that allows producers to write to it, and consumers to read from it. It runs on a single server and has a single message queue.</p>
    <p align="center">

## Description

Built with [Nest](https://github.com/nestjs/nest) framework TypeScript.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```

## API Documentation

The documentation is in swaggar

http://localhost:3000/api

## Code documentation

```batch
$ npx @compodoc/compodoc -p tsconfig.json -s
```
Then run this on browser

```batch
http://localhost:8080
```

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## API Description

Post message to the queue
```batch
POST http://localhost:3000/messages
    payload {
        message: string
    }
    
    response {
        id: string
    }
```

Get  messages in the queue
```batch
GET http://localhost:3000/messages
    response [{
        id: string,
        message: string,
        timestamp: string,
        isProcessing: boolean
    }]
```

Consume messages in the queue
```batch
GET http://localhost:3000/consumes?take=2
    response [{
        id: string,
        message: string,
        timestamp: string,
    }]
```

Acknowledge message in the queue
```batch
POST http://localhost:3000/messages
    payload {
        id: string
    }
    
    response {
        id: string,
        acknowledged: true
    }
```
## API Postman Collection

WonderQ.postman_collection.json file is located at the root directory
