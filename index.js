var express = require('express')
var app = express();
var fs=require('fs');

var mybuff= new Buffer(fs.readFileSync('index.html'));
var mystr = mybuff.toString();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(mystr)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
