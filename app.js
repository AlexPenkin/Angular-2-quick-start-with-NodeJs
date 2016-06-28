const express = require('express');
const app = express();
const path = require('path');
const index = path.join(__dirname, 'public/index.html')

app.use('/', express.static(__dirname + '/public'));

app.listen('8888', function(){
  console.log("worked on 8888 port")
})

app.get('/', function (req, res) {
  res.sendFile(index);
});

app.get('/getData', function (req, res) {
  setTimeout(() => res.send(' Yeah bitch!') , 1000);
});
