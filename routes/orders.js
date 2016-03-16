var
  express    = require('express'),
  passport   = require('passport'),
  orderRouter = express.Router(),
  orderCtrl   = require('../controllers/orders.js')

orderRouter.route('/orders')
  .get(orderCtrl.index)
  .post(orderCtrl.createOrder)

orderRouter.route('/orders/:id', isLoggedIn)
  .post(orderCtrl.createOrder)
  .put(orderCtrl.update)
  .get(orderCtrl.show)
  .delete(orderCtrl.destroy)

function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/login')
}

module.exports = orderRouter
