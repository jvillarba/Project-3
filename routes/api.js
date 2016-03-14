var
  express = require('express'),
  passport = require('passport'),
  apiRouter = express.Router(),
  apiCtrl = require('../controllers/api.js')


//api route for product JSON
apiRouter.get('/api', apiCtrl.show)


module.exports = apiRouter
