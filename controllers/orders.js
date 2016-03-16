var Order = require('../models/order.js')
var User = require('../models/User.js')

module.exports = {
 //order create
 index: function(req, res){
   Order.find({}, function(err, orders){
     if(err) return console.log(err)
     res.json(orders)
   })
 },
  show: function(req,res){
    Order.findOne({_id: req.params.id}, function(err, order){
      if(err) return console.log(err)
      res.json(order)
    })
  },
  createOrder: function(req,res){
    User.findOne({_id: req.params.id}, function(err, user){
      if(err) throw err

      //create and save meme
      var newOrder = new Order(req.body)
      newOrder._by = user
      newOrder.save(function(err, order){
        user.orders.push(order)
        user.save(function(err, user){
          if(err) throw err
          res.json(user)
        })
      })
      //push meme to users meme array

    })
  }, //create function


  update: function(req,res){
  Order.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, order){
    if(err) return console.log(err)
    order.save(function(err, order){
      if(err) return console.log(err)
      res.json({success: true, updatedOrder: order})
    })
  })
}, //end update
destroy: function(req,res){
  	Order.findOneAndRemove({_id: req.params.id}, function(err){
  		if(err) return console.log(err)
  		res.json({success: true, message: "Order was deleted"})
  	})
  },

} //end
