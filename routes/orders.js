var
  express    = require('express'),
  passport   = require('passport'),
  orderRouter = express.Router(),
  orderCtrl   = require('../controllers/orders.js')

  orderRouter.route('/users/:id/orders')
    .get(orderCtrl.index)
    .post(orderCtrl.createOrder)

  orderRouter.route('/users/:id/orders/:orderId')
    .patch(orderCtrl.update)
    .get(orderCtrl.show)
    .delete(orderCtrl.destroy)


  module.exports = orderRouter
