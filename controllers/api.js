var Path = require('path');
var request = require('request');
var catList = ["2636","3920","3920_582507_583874", "4044_133012_1045881", "3944",
  "4104", "4171_4191", "5438_426265_1032639","4096","4125_4161","1085632_1229464",
  "2637_667479","4171","4171_1015079","4171_1111647"]


module.exports = {
  catList: catList,
  mathRan: Math.floor(Math.random() * (catList.length - 0)) + 0,
//show api
  show1: function(req,res){ //for home page
    var url = "http://api.walmartlabs.com/v1/paginated/items?format=json&category="+ catList[1]+"&apiKey=frt6ajvkqm4aexwjksrukrey"

    request({url: url, json: true}, function(error, response, body){
      console.log(body.items[0])
      var data = { //this for our index view, myHeader is a variable for the home page view
        imageResult: body.items[0]
      }

      res.json(data)
    })

  },

  show2: function(req,res){ //for home pag


    request({url: url, json: true}, function(error, response, body){
      console.log(body.items[0])
      var data = { //this for our index view, myHeader is a variable for the home page view
        imageResult: body.items[0]
      }

      res.json(data)
    })


  }

 }
