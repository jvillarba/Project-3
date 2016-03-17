var mongoose = require('mongoose')

// var addressSchema = new mongoose.Schema({
//   address: String,
//   phone: Number
//   // city: String,
//   // state: String,
//   // zip: Number
// })
//
// var Address = mongoose.model('Address', addressSchema)
//
// module.exports = Address

var creditSchema = new mongoose.Schema({
  number: Number,
  expDate: Date,
  name: String,
  cvv: Number
})

var Credit = mongoose.model('Credit', creditSchema)

module.exports = Credit
