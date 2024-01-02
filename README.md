# Details

At this project I have two options for a server 
    - `express`
    - `nest js`

Down below I have an explenation how to activate each of them they both do the same.
Feel free to try both!

About the DB:
    I moved to a mongoDB (atlas) so if you need premission or something doesnt work feel free to contact me.


# Setup

This application is requiring angular  `17.0.7` (dont worry you will download it later).

Also you need to have the right node version which is `20.9.0`.

Im using node package manager (NPM) version `10.1.0`.

The front will run on http://localhost:4200;

The backend will run on  http://localhost:8080;

Then you will have to install all of the dependencies for the client and the server.

## Installing

    Run the following commands:

    (All commands are written assuming your terminal is located at the head of the project file tree)

## Server side (express)

### first
    To use express first make sure that in 'users.service.ts' file you have to change the apiUrl to the express environment

    ` private apiUrl = environment.apiUrl + '/users/getUsers';`

    To install all dependencies run:
        - `cd server`
        - `npm i`

    To run your express server:
        - `npm run start:dev`

## Server side (nest)

### first
    To use nest first make sure that in 'users.service.ts' file you have to change the apiUrl to the nest environment
    `private apiUrl = environmentNest.apiUrl + '/users';`
    

    Im using nest 10.2.1 globally its important to have 10+  version so everything will work :D

    To install all dependencies run:
    - `cd nest-server`
    - npm i

    To run your nest js server:
     - `npm run start:dev`


## Client side

    To insatall all the dependencies run:
        - `cd client` 
        - `npm i `

    To run your client:
        - `npm run start` 

### test
    for testing use command:
        - `npm run test`
