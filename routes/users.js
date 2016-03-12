//user routes

var
  express = require('express'),
  passport = require('passport'),
  userRouter = express.Router()


userRouter.route('/login')
  .get(function(req,res) {
    res.render('login', {message: req.flash('loginMessage')})
  })
  .post(passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }))

userRouter.route('/signup')
  .get(function(req,res) {
    res.render('signup', {message: req.flash('signupMessage')})
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
  successRedirect: '/profile',
  failureRedirect: '/login'
}))

function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/login')
}

module.exports = userRouter
