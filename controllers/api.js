var Path = require('path');
var request = require('request');
var catList = ["2636","3920","3920_582507_583874", "4044_133012_1045881", "3944",
  "4104", "4171_4191", "5438_426265_1032639","4096","4125_4161","1085632_1229464",
  "2637_667479","4171","4171_1015079","4171_1111647"]
var mathRan = function (){return (Math.floor(Math.random() * (catList.length - 0)) + 0)}

// var url = "http://api.walmartlabs.com/v1/paginated/items?format=json&category="+ catList[mathRan()]+"&apiKey=frt6ajvkqm4aexwjksrukrey"


module.exports = {

//show api
  show: function(req,res){ //for home page

    var catArray = []
    for (var i = 0; i < 4; i++) {
      catArray[i] = "http://api.walmartlabs.com/v1/paginated/items?format=json&category="+ catList[mathRan()]+"&apiKey=frt6ajvkqm4aexwjksrukrey"
    }

    var data = []

    request({url: catArray[0], json: true}, function(error, response, body){
      var mathRan2 = function (){return (Math.floor(Math.random() * (body.items.length - 0)) + 0)}
      var randoItem = body.items[mathRan2()]
      data.push(randoItem)

      request({url: catArray[1], json: true}, function(error, response, body){
        var mathRan2 = function (){return (Math.floor(Math.random() * (body.items.length - 0)) + 0)}
        var randoItem = body.items[mathRan2()]
        data.push(randoItem)

        request({url: catArray[2], json: true}, function(error, response, body){
          var mathRan2 = function (){return (Math.floor(Math.random() * (body.items.length - 0)) + 0)}
          var randoItem = body.items[mathRan2()]
          data.push(randoItem)

          request({url: catArray[3], json: true}, function(error, response, body){
            var mathRan2 = function (){return (Math.floor(Math.random() * (body.items.length - 0)) + 0)}
            var randoItem = body.items[mathRan2()]
            data.push(randoItem)

            res.json(data)
          }) // End of API request 4
        }) // End of API request 3
      }) // End of API request 2
    }) // End of API request 1

  }



 }
