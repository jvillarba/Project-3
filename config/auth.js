require('dotenv').config();

module.exports = {
  'facebook': {
    'clientID': process.env.FACEBOOK_CLIENT_ID,
    'clientSecret': process.env.FACEBOOK_CLIENT_SECRET,
    'callbackURL': 'http://localhost:3000/auth/facebook/callback',
    'profileFields': ['emails', 'displayName']
  }
}
