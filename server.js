// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up the Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require route exports
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Tells the server to start listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});