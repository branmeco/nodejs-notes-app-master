### nodejs-notes-app-master

This is a basic Web application to manage simple Notes on the web using Javascript Technologies like Nodejs, Mongodb, and other related technologies. Tecnically this is a Multi-Page Application using Handlebars as template engine.

This app can do:

CRUD Operations: create/read/update/delete Notes
Allows a user to do login and save his personal notes


![Screenshoot](https://user-images.githubusercontent.com/53285796/220375862-1b967d9f-4b09-4546-99f4-1027373cd651.png)

## Installation

<code>
git clone https://github.com/FaztTech/nodejs-notes-app
cd nodejs-notes-app
npm i
npm run dev # run in development mode
npm start # run in production mode
</code>

You need to have Mongodb installed Locally or stablish a MONGODB_URI environment variable in order to connect to any mongodb instance (using Mongodb Atlas for example).

## Environment Variables
This app needs the following environment Variables

MONGODB_URI this is the Mongodb URI string
PORT the server http port for the application
NODE_ENV node environment

## Default User
when the app is lauched, this will create an Admin user with the following credentials:

email: correo@correo.com
password: 1234
