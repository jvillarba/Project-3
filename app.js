var
	express				 = require('express'),
	app 					 = express(),
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
	path 					 = require('path'),
	request				 = require('request')

app.use("/public", express.static(path.join(__dirname, 'public')))

// environment port
var port = process.env.PORT || 3000

// mongoose connection
mongoose.connect('mongodb://localhost/gift-db', function(err){
	if(err) return console.log('Cannot connect :(')
	console.log('Connected to MongoDB. Sweet! (gift-db)')
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

//root route
app.get('/', function(req,res){
	res.render('roulette')
})

// user routes
app.use('/', userRoutes)

// product/order Routes

// api routes
app.get('/api', apiRoutes)





//========================================================================
app.listen(port, function(){
	console.log("Server running on port", port)
})
