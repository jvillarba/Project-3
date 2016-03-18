var dotenv = require('dotenv').config({silent: true})

module.exports = {
  'facebook': {
    'clientID': process.env.FACEBOOK_CLIENT_ID,
    'clientSecret': process.env.FACEBOOK_CLIENT_SECRET,
    'callbackURL': 'https://evening-depths-97156.herokuapp.com/auth/facebook/callback',
    'profileFields': ['emails', 'displayName']
  }
}

// https://evening-depths-97156.herokuapp.com/auth/facebook/callback
// http://localhost:3000/auth/facebook/callback
