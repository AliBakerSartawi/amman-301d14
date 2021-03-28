// npm init, will initiate a package.json
// but we need at least one js file in that directory, because it will be the entry point for the package.json

// the install dependencies. npm i cors, npm i dotenv, npm i express
// if the dependencies are already written in package.json, then all we need it to simply: npm i

//////difference between library and framework
//we execute a library in our code
//a framework will execute our code

'use strict';

// load envirnoment variables from the .env file
require('dotenv').config();

//application dependencies
const express = require('express');
const cors = require('cors');
const PORT = 3000; //for convention reasons, it's in all caps
// another way to reference PORT
const PORT = process.env.PORT; //this will take the value from .env file
console.log(process.env.PORT);

//application setup (kickstarting)
// const PORT = process.env.PORT;
const app = express();


// starting point of our application
app.listen(PORT, ()=> console.log(`Listening to Port ${PORT}`));