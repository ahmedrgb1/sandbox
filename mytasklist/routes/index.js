var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
   res.render('index.html');
   // res.send('index'); 
   console.log('index loaded');
});

module.exports = router;
