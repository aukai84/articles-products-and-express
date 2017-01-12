//jshint esversion: 6
const express = require('express');
const router = express('router');
const displayProducts = require('../db/products');

let id = 0;

router.post('/', (req, res) => {
  console.log(req.body);
  if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
    let productObject = {
      id: id,
      name: req.body.name,
      price: req.body.price,
      inventory: req.body.inventory
    };
    displayProducts.productList.push(productObject);
    res.redirect('/');
  } else {
    res.redirect(400, '/new');
  }
  id++;
});

//router.put(`/products/:id`)


module.exports = router;