var User = require('../models/User.js')

module.exports = {

  // GET all users
  index: function(req, res){
    User.find({}, function(err, users){
      if(err) return console.log(err)
      res.json(users)
    })
  },

  // POST a users
  create: function(req, res){
    User.create(req.body, function(err, users){
      if(err) return console.log(err)
      res.json(users)
    })
  },

  // SHOW single users
  show: function(req, res){
    User.findOne({_id: req.params.id}, function(err, users){
      if(err) return console.log(err)
      res.json(users)
    })
  },

  // DELETE single user
  destroy: function(req, res){
    User.findOneAndRemove({_id: req.params.id}, function(err){
      if(err) return console.log(err)
      res.json({success: true, message: "A user was deleted"})
    })
  },

  // EDIT single User
  update: function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user){
      if(err) return console.log(err)
      user.completed = !user.completed
      user.save(function(err, user){
        if(err) return console.log(err)
        res.json({success: true, updatedUser: user})
      })
    })
  }
}
