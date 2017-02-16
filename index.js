var express = require('express')
var server = express()

var PORT = 9729

var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}))

server.post('/', function (req, res) {
  // console.log(req.body)
  console.log(req.body.level + ': ' + req.body.message)
  res.send('OK')
})

server.listen(PORT, function () {
  console.log('Log Server listening on port ' + PORT)
})