var
  express    = require('express'),
  passport   = require('passport'),
  orderRouter = express.Router(),
  orderCtrl   = require('../controllers/orders.js')

  orderRouter.route('/orders')
    .get(orderCtrl.index)
    .post(orderCtrl.createOrder)

  orderRouter.route('/orders/:id')
    .put(orderCtrl.update)
    .get(orderCtrl.show)
    .delete(orderCtrl.destroy)


  module.exports = orderRouter
