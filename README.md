# Tradibi ReadMe

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Database setup

You have to create a mongodb database

## .env file

For the API test work correctly you should create an .env file a the route directory and it should look like this:

```bash
MONGODB_URI="mongodb://127.0.0.1:27017/tradibi"

JWT_ACCESS_TOKEN_SECRET="JWT_ACCESS_TOKEN_SECRET"
JWT_REFRESH_TOKEN_SECRET="JWT_REFRESH_TOKEN_SECRET"
```
