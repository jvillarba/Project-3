var Path = require('path');
var request = require('request');


module.exports = {

//show api
  show: function(req,res){ //for home page
    var url = "http://api.walmartlabs.com/v1/paginated/items?format=json&category=2637_1042319&apiKey=frt6ajvkqm4aexwjksrukrey"





    request({url: url, json: true}, function(error, response, body){
      console.log(body.items[0])
      var data = { //this for our index view, myHeader is a variable for the home page view
        imageResult: body.items[0]
      }
      // body.response.employers.each(function(el){
      // 	if(el.industry) {
      // 		industries.push(el.industry)
      // 	}
      // })
      res.render('products', data)
    })


  }
 }
