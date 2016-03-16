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
    console.log(user._id);
    // User.findOne({_id: user._id}, function(err, user){
    //   if(err) throw err
    //
    //   //create and save meme
    //   var newOrder = new Order(req.body)
    //   newOrder._by = user
    //   newOrder.save(function(err, order){
    //     user.orders.push(order)
    //     user.save(function(err, user){
    //       if(err) throw err
    //       res.json(user)
    //     })
    //   })
    //
    // })
  }, //create function
  update: function(req,res){
    console.log("update request recieved");
    console.log(req.params.id);
    res.render({user: req.user})
    // Order.findOne({_id: req.params.id}, req.body, {new: true}).upsert().update(function(err, order){
    //
    //   if(err) return console.log(err)
    //
    //   // for (var i = 0; i < req.body.length; i++) {
    //   //   Oder.product/*how do I concat a number*/ = req.body[i]
    //   // }
    //   Order.product1 = req.body[0]
    //   Order.product2 = req.body[1]
    //   Order.product3 = req.body[2]
    //   Order.product4 = req.body[3]
    //
    //   order.save(function(err, order){
    //     if(err) return console.log(err)
    //     res.json({success: true, updatedOrder: order})
    //   })
    //
    // })
  }, //end update
  destroy: function(req,res){
  	Order.findOneAndRemove({_id: req.params.id}, function(err){
  		if(err) return console.log(err)
  		res.json({success: true, message: "Order was deleted"})
  	})
  },

} //end
