var express = require('express')
var bodyParser = require('body-parser');
var logctrl = require('./logctrl');

/* CONST */
var PORT = 9729

/* PRIVATE VARIABLE */
var server = express()

/* ENTRY POINT */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));

server.get('/list', function(req, res) {
  var list = logctrl.list(20, 0);
  res.send(JSON.stringify(list));
});
server.get('/data', function(req, res) {
  var entry = logctrl.get(req.body.token);
  res.send(JSON.stringify(entry));
});

server.post('/init', function (req, res) {
  var token = logctrl.init(req.body.app, req.body.name, req.body.notes);
  res.send('{"token":"' + token + '"}');
});

server.post('/log', function (req, res) {
  logctrl.log(req.body.token, req.body.level, req.body.message, req.body.tag);
  res.send('OK')
});

server.post('/', function (req, res) {
  // console.log(req.body)
  console.log(req.body.level + ': ' + req.body.message)
  res.send('OK')
})

server.listen(PORT, function () {
  console.log('Log Server listening on port ' + PORT)
})