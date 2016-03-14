var
  express = require('express'),
  passport = require('passport'),
  apiRouter = express.Router(),
  apiCtrl = require('../controllers/api.js')


//api route for product JSON
apiRouter.get('/api1', apiCtrl.show1)
apiRouter.get('/api2', apiCtrl.show2)
// apiRouter.get('/api3', apiCtrl.show3)
// apiRouter.get('/api4', apiCtrl.show4)


module.exports = apiRouter
