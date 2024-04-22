## Description

A server to support Tennis Canada's Rankings website.

Very limited functionality.  It merely allows provides an API for the Tennis 
Canada Rankings website to access a Google Workbook to retrieve information 
about all levels of all Open tournaments in Canada.  The workbook has one 
worksheet per year.

This application needs credentials to access the Google Workbook. The 
credentials file goes in the root directory of this project.

It should never be put under source control.

A copy of the credentials file was sent from Ted Moens to Rob Wong on 
2024-04-22.

The workbook is currently owned by Arun Nath of Tennis Canada.

By default, the server will run on port 3037, the client expects it there.  
So, if you change it here, you must make a corresponding change in the client.

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

No automated testing.

## License

This is [MIT licensed](LICENSE).
