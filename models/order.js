
var
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  Schema = mongoose.Schema


var orderSchema = new mongoose.Schema({
  product1: String,
  product2: String,
  product3: String,
  product4: String,
  totalPrice: Number,
  orderDate: Date,
  shippingAddress: String,
  shipToName: String,
  shipPhone: String,
  message: String,
  _by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

var Order = mongoose.model('Order', orderSchema)

module.exports = Order
