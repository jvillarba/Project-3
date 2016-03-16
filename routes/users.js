//user routes

var
  express    = require('express'),
  passport   = require('passport'),
  userRouter = express.Router(),
  userCtrl   = require('../controllers/users.js')

userRouter.route('/users')
  .get(userCtrl.index)
  .post(userCtrl.create)

userRouter.route('/users/:id')
  .patch(userCtrl.update)
  .get(userCtrl.show)
  .delete(userCtrl.destroy)

userRouter.route('/gifts')
  .get(function(req,res) {
    res.render('gifts', {user: req.user})
  })

userRouter.route('/')
  .get(function(req,res) {
    res.render('start', {user: req.user})
  })

userRouter.route('/login')
  .get(function(req,res) {
    res.render('login', {message: req.flash('loginMessage'), user: req.user})
  })
  .post(passport.authenticate('local-login', {
    successRedirect: '/gifts',
    failureRedirect: '/login'
  }))

userRouter.route('/signup')
  .get(function(req,res) {
    res.render('signup', {message: req.flash('signupMessage'), user: req.user})
  })
  .post(passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
  }))

userRouter.get('/profile', isLoggedIn, function(req,res) {
  // render users profile only if they're logged in.
  res.render('profile', {user: req.user})
})

userRouter.get('/logout', function(req,res) {
  // destroy the session and redirect to the root.
  req.logout()
  res.redirect('/')
})

userRouter.get('/auth/facebook', passport.authenticate('facebook',{
  scope: ['email']
}))

userRouter.get('/auth/facebook/callback', passport.authenticate('facebook',{
  successRedirect: '/gifts',
  failureRedirect: '/login'
}))

function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/login')
}

module.exports = userRouter
