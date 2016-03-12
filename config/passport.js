var
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  FacebookStrategy = require('passport-facebook').Strategy,
  User = require('../models/User.js'),
  configAuth = require('./auth.js')

// this is creating a cookie by taking the user info and making
// a series out of it.
// aka a user logs in and that info becomes a cookie.
passport.serializeUser(function(user, done) {
  done(null/*placeholder for error*/, user.id)
})

// translating that cookie into a user object
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err,user) {
    done(err,user)
  })
})

// our Strategy for creating Users: called local-signup
passport.use('local-signup', new LocalStrategy({
  // map email and password to passport's default keys
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req,email,password,done) {
  User.findOne({'local.email': email}, function(err,user) {
    // check if there's already a matching user:
    if(err) return done(err)
    // there's a user so don't let them use that email:
    if(user) return done(null, false, req.flash('signupMessage', 'That email is taken.'))
    // create the user, and continue to the corresponding redirect:
    var newUser = new User()
    newUser.local.name = req.body.name
    newUser.local.email = email
    newUser.local.password = newUser.generateHash(password)
    newUser.save(function(err) {
      if(err) return console.log(err)
      return done(null, newUser, null)
    })
  })
}))

// login strategy
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req,email,password,done) {
    User.findOne({'local.email': email}, function(err, user) {
      if(err) return done(err)
      if(!user) return done(null, false, req.flash('loginMessage', 'No user found...'))
      if(!user.validPassword(password)) return done(null, false, req.flash('loginMessage', 'Wrong password bro.'))
      return done(null, user)
    })
}))

// facebook strategy
passport.use(new FacebookStrategy({
  clientID: configAuth.facebook.clientID,
  clientSecret: configAuth.facebook.clientSecret,
  callbackURL: configAuth.facebook.callbackURL,
  profileFields: configAuth.facebook.profileFields
},function(token, refreshToken, profile, done) {
  User.findOne({'facebook.id': profile.id}, function(err,user) {
    if(err) return done(err)
    if(user) return done(null, user)
    var newUser = new User()
    newUser.facebook.id = profile.id
    newUser.facebook.token = token
    newUser.facebook.name = profile.displayName
    newUser.facebook.email = profile.emails[0].value
    newUser.save(function(err) {
      if(err) return console.log(err)
      return done(null, newUser)
    })
  })
}))

module.exports = passport
