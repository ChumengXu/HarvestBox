var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HarvestBox-Retailer' });
});

router.get('/signin',function(req, res, next){
  res.sendFile(__dirname+ '/signin.html',{title:'Sign in'});
});

module.exports = router;
