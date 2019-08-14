var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/map', function(req, res, next) {
  res.render('addin-mapreplay/mapreplay.html', { title: 'Express' });
});

module.exports = router;
