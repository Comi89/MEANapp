var restfull = require('node-restful');
var mongoose = restfull.mongoose;

var productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  price: Number
});

module.exports = restfull.model('Products', productSchema);
