// dependencies
var express = require('express');
var router = express.Router();

// import burger model
var db = require("../models");

// routes
// get route for all burgers
router.get("/", function(req, res) {
  db.Burger.findAll().then(function(dbBurger){
    res.render('index', {burgers: dbBurger})
  })
});


router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(function(dbBurger){
    console.log(dbBurger);
    res.redirect('/');
  })
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
