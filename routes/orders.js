var
  express    = require('express'),
  passport   = require('passport'),
  orderRouter = express.Router(),
  orderCtrl   = require('../controllers/orders.js')

  orderRouter.route('/orders')
    .get(orderCtrl.index)
    .post(orderCtrl.create)

  orderRouter.route('/orders/:id')
    .patch(orderCtrl.update)
    .get(orderCtrl.show)
    .delete(orderCtrl.destroy)


  module.exports = orderRouter
