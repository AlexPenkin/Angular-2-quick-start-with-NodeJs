'use strict'
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const index = path.join(__dirname, 'public/index.html')
var arr = [1, 2, 3];
var myJsonString = JSON.stringify(arr);
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

app.listen('8888', function() {
  console.log("worked on 8888 port")
})

app.get('/', function(req, res) {
  res.sendFile(index);
});

app.get('/getData', function(req, res) {
  res.send(arr);
});

app.post('/getData', function(req, res) {
  console.log(+req.body.name);
  if (!isNaN(+req.body.name)) {
    arr.push(+req.body.name);
    res.send(arr);
  } else console.log('error!');
    console.log(arr);
});

app.get('/deleteItem', function(req, res){

});
