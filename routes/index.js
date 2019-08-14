var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

/* GET distress page. */
router.get('/distress', function(req, res, next) {
  res.render('addin-drive/distress/distress.html', { title: 'Express' });
});

/* GET navigator page. */
router.get('/navigator/', function(req, res, next) {
  res.render('addin-drive/navigator/navigator.html', { title: 'Express' });
});

/* GET map page. */
router.get('/map/', function(req, res, next) {
  res.render('addin-mapreplay/mapreplay.html', { title: 'Express' });
});

/* GET compliancereport page. */
router.get('/compliancereport/', function(req, res, next) {
  res.render('compliancereport/src/compliance.html', { title: 'Express' });
});

module.exports = router;
