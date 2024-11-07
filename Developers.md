# Tech Stack

There are many more smaller dependencies, but the ones listed here are the ones
that we are actively using.

### Front End
    
1. HTML, CSS, Javascript (Web Basics)
2. Vue.js - JavaScript Framework

### Back End

1. JavaScript
2. Node.js
3. ExpressJS
4. Nodemon
5. Sequelize
6. MySQL - Database

___

# Setting up for Development

I am providing these instructions to make it easier for anyone from experienced to
new-to-programming to start contributing.

## Installing Node.js and npm

__Node.js__ is what helps run our web application. __npm__ is what we use to handle our dependencies.
Everything in `package.json` (client and server directories) is installed and updated with __npm__.

You can download both __Node.js__ and npm from the official website here:
[Node.js Documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm)

Follow the setup wizard and ensure you include npm in your installation when prompted.

## Installing the dependencies

Dependencies are not pushed to the repository as they take up a lot of space and are subject to change
when updated.

Use your terminal to navigate to the directory you will be working on.

    cd Client

or

    cd Server

Use __npm__ to install the defined dependencies in `package.json`.

    npm install

___

# Development

You are now ready to start developing.

## Front-End | Client Directory

Navigate to the `Client` directory in your terminal if not already there.

    cd Client

Start the Vue web application

    npm run serve

This will create a link for you to click or paste in your web browser of choice.

Go ahead and start making changes. Vue.js will automatically update the page
in real time to reflect your changes.

### Building for Production

Changes are not made to the official website until they are built.

Navigate to the `Client` directory in your terminal if not already there and build.

    cd Client
    npm run build


This will output the finished product to the dist directory. DigitalOcean will
pick up this change automatically restart the website.


## Back-End | Server Directory

I suggest having MySQLWorkbench to host the database locally. This way you can 
use an empty of the database rather than the real one. Experiment and test out 
your code/functions in there, then once it is ready, you can integrate it into 
the official database.

Navigate to the `Server` directory in your terminal if not already there.

    cd Server

Start the Server in your terminal

    npm run start

This will initialize Nodemon to handle the server. Nodemon is a package that will 
automatically check for errors and pause the server until you fix them. 
Once you save the file, it will attempt to restart. This makes
it much easier to find problems and restart the server rather than using the 
terminal each time.