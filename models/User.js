//user model
var
  mongoose = require('mongoose'),
  Order = require('../models/order.js')
  bcrypt = require('bcrypt-nodejs'),
  Schema = mongoose.Schema

var userSchema = new Schema({
  local: {
    name: String,
    email: String,
    password: String,
    _order: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
  },
  facebook: {
    id: String,
    name: String,
    token: String,
    email: String,
    _order: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
  }
})

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

var User = mongoose.model('User', userSchema)

module.exports = User
