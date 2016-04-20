var
	express				 = require('express'),
	app 					 = express(),
	dotenv 				 = require('dotenv').config({silent: true}),
	ejs 					 = require('ejs'),
	ejsLayouts 		 = require('express-ejs-layouts'),
	mongoose 			 = require('mongoose'),
	flash 				 = require('connect-flash'),
	logger 				 = require('morgan'),
	cookieParser 	 = require('cookie-parser'),
	bodyParser 		 = require('body-parser'),
	session 			 = require('express-session'),
	passport 			 = require('passport'),
	passportConfig = require('./config/passport.js'),
	userRoutes 		 = require('./routes/users.js'),
	apiRoutes 		 = require('./routes/api.js'),
	orderRoutes 	 = require('./routes/orders.js'),
	path 					 = require('path'),
	request				 = require('request'),
	bodyParser     = require('body-parser')


app.use("/public", express.static(path.join(__dirname, 'public')))

// environment port
var port = process.env.PORT || 3000

// connect to MLAB (mongo db)
var DB_URL = process.env.MLAB_LINK || 'mongodb://localhost/gift-db'
// mongoose connection
mongoose.connect(DB_URL, function(err){
	if(err) return console.log('Cannot connect :(')
	console.log('Connected to MongoDB. Sweet!', DB_URL)
})

// middleware
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
	secret: "boomchakalaka",
	cookie: {_expires: 6000000}
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// ejs configuration
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/what', function(req, res){
	console.log(req.query);
	res.send('<h1>sup?' +req.query.name+ '</h1>')
})

//root route
app.get('/gifts', function(req,res){
	console.log(req.query);

	res.render('gifts', {user: req.user })
})
//
// app.use(function (req,res,next) {
//   if (req.isAuthenticated()) {
// 		return next()
// 	}else{
// 		req.user = {}
// 		return next()
// 	}
// })

// app.get('/', function(req,res){
// 	res.render('start', {user: req.user })
// })

// user routes
app.use('/', userRoutes)

// product/order Routes
app.use('/', orderRoutes)

// api routes
app.get('/api', apiRoutes)





//========================================================================
app.listen(port, function(){
	console.log("Server running on port", port)
})
