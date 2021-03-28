// npm init, will initiate a package.json
// but we need at least one js file in that directory, because it will be the entry point for the package.json

// the install dependencies. npm i cors, npm i dotenv, npm i express
// if the dependencies are already written in package.json, then all we need it to simply: npm i

//////difference between library and framework
//we execute a library in our code
//a framework will execute our code

'use strict';

////// load envirnoment variables from the .env file
require('dotenv').config();

//////application dependencies
const express = require('express');
const cors = require('cors');



//////application setup (kickstarting)
const PORT = 3000; //for convention reasons, it's in all caps
// another way to reference PORT
// const PORT = process.env.PORT; //this will take the value from .env file
// console.log(process.env.PORT);
const app = express();
app.use(cors())

///endpoints
app.get('/location', handleLocationRequest);
app.get('/restaurant', handleRestaurantRequest);

function handleLocationRequest(req, res) {
  console.log(req.query);
  console.log(req.query.city);
  const searchQuery = req.query.city;

  const locationsRawData = require('./location.json');
  const location = new Location(locationsRawData[0]);
  res.send(location);
}

function handleRestaurantRequest(req, res) {
  const restaurantsRawData = require('./restaurants.json'); //require gets the data from .json
  const restaurantsData = [];

  restaurantsRawData.nearby_restaurants.forEach(restaurant => {
    restaurantsData.push(new Restaurant(restaurant));
  });

  res.send(restaurantsData);
}

// constructors
//we used the constructor to change the property names to match the mustache template in the HTML
function Location(data) {
  this.formatted_query = data.display_name;
  this.latitude = data.lat;
  this.longitude = data.lon;
}

function Restaurant(data) {
  this.restaurant = data.restaurant.name;
  this.cuisines = data.restaurant.cuisines;
  this.locality = data.restaurant.location.locality;
}

app.use('*', (request, response)=>{
  response.send('all good, nothing to see here');
});
app.listen(PORT, ()=> console.log(`Listening to Port ${PORT}`));