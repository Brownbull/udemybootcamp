# links
https://ifttt.com/onboarding?aea=true
https://www.programmableweb.com/category/all/apis

#
# // Javascript code to request an object on a JSON reponse file
var request = require('request');
// calling yahho api
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
  if(!error && response.statusCode == 200){
    // response is a string so we have to cast result to a JSON object
    var parsedData = JSON.parse(body);
    // console.log(body); // Show string response
    console.log(parsedData["query"]["results"]["channel"]["astronomy"]); // Show the HTML for requested url
  }
});
