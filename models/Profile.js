var mongoose = require('mongoose')

var addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number
})

var creditSchema = new mongoose.Schema({
  number: Number,
  expDate: Date,
  name: String,
  cvv: Number
})

var Credit = mongoose.model('Credit', creditSchema)

module.exports = Credit
