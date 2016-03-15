var Order = require('../models/order.js')

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
  create: function(req,res){
    Order.create(req.body, function(err, order){
      if(err) return console.log(err)
      res.json({success:true, order: order})
    })
  },
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
