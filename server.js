var express = require('express');
var app = express();

var myLogin = "AKIAJXBOVX5Q2EULDUIA";
var mypwd = "SqcyDpetv+pCsbNYWHDLE8yR5mJ13MI+4d8NOwtM";

// set the view engine to ejs
app.set('view engine', 'ejs');
// static assets directory
app.use(express.static('public'));

// index page, this callback contains code that can be exploited for CVE-2022-29078 
app.get('/', function(req, res) {
  if (!req.query.hasOwnProperty('id')){
    req.query.id = 'Stranger';
  }
  res.render('pages/index',req.query);
});

app.listen(3000);
console.log('Server is listening on port 3000');