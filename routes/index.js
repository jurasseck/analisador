module.exports = function(app, passport){

app.get('/', function(req, res, next) {
  res.render('index', { title: 'The ass revelation' });
});

app.get('/join', function(req,res){
	res.render('join', {title: 'Join'});
});


}

// var express = require('express');
// var router = express.Router();

// /* GET home page. */


// module.exports = router;
