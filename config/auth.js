require('dotenv').config();

module.exports = {
  'facebook': {
    'clientID': process.ENV.FACEBOOK_CLIENT_ID,
    'clientSecret': process.ENV.FACEBOOK_CLIENT_SECRET,
    'callbackURL': 'http://localhost:3000/auth/facebook/callback',
    'profileFields': ['emails', 'displayName']
  }
}
