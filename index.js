const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('index')});

app.get('/update',function(req,res){
  var json = JSON.parse(fs.readFileSync('./database.json', 'utf8'));
  res.json(json);
});
app.listen(3001);


