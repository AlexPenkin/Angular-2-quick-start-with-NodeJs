const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'));

app.listen('8888', function(){
  console.log("worked on 8888 port")
})

app.get('/', function (req, res) {
  res.sendFile('/index.html');
});
/*app.get('/getData', function (req, res) {
  //res.send('worked!');
  //setTimeout(() => res.send(' Yeah bitch!') , 1000);
  res.status(500);
});*/
