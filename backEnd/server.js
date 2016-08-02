var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var bcrypt = require('my-bcrypt');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
// mongoose.connect('mongodb://localhost/thrones');

var options =
  {
    method: 'GET',
    url: 'https://api.foursquare.com/v2/venues/search',
    qs:
      {
        client_id: 'W2QTZ3TX45WCF24P4OFGQ1PHFO1UXQ3BFZLVI4AX10XWJAEF',
        client_secret: 'EZ5O5LUJK2H1C534KAHSLDZCQTMTQ4FJHCWP0UZOQ3B1POV2',
        v: '20130815',
        ll: '33.85,-84.37',
        query: 'bar',
        radius: '800'
      },
    headers:
      {
        'postman-token': '279c0859-e643-792a-a624-a6e7975e5899',
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      }
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


app.listen(8000, function() {
  console.log("Listening on port 8000");
});
