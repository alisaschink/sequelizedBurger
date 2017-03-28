// dependencies
var express = require('express');
var router = express.Router();

// import burger model
var burger = require("../models/burger.js");

// routes
// get route for all burgers
router.get("/", function(req, res) {
  // burger.all(function(data){
  //   res.render('index', {burgers: data})
  // });
});


router.post("/", function(req, res) {
  // var cols = ['burger_name', 'devoured'];
  // var vals = [req.body.burger_name, 0];

  // burger.create(cols, vals, function(response){
  //   res.redirect('/');
  // });
});

router.put("/:id", function(req, res){
  // var objColVals = {devoured: 1}
  // var condition = {id: req.params.id}
  // burger.update(objColVals, condition, function(response){
  //   res.redirect('/');
  // });
})

// export routes for server.js to use.
module.exports = router;
