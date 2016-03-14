var Path = require('path');



module.exports = {

//show api
  show: function(req,res){ //for home page
  var data = { //this for our index view, myHeader is a variable for the home page view
    imageResult: "<h1>Hola</h1>"
   }
       //2) Need to have res.render lets you choose what view you want to use like or jade
      res.render('products', data)  //will look for index file in a folder called views
 }

} //end
