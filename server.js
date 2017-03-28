// dependencies
var express = require('express');
var path = require("path");
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// create app
var app = module.exports = express();
var PORT = process.env.PORT || 3000;

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use static content from the public directory
app.use(express.static(process.cwd() + "/public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// lib
var burgerController = require('./controllers/burger_controller');

// set up view w. Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// routes
app.use('/', burgerController);

app.listen(PORT, function() {
  console.log(`Listening on PORT: ${PORT}`);
});