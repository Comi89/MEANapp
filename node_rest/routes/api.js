var express = require('express');
var router = express.Router();

var Product = require('../models/products')

Product.methods(['post', 'get', 'delete', 'put']);
Product.register(router, '/products');



// Router return
module.exports = router;
