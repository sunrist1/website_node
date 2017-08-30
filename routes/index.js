var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

// 关于我们
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: '关于我们' });
});

// 联系我们
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '联系我们' });
});


module.exports = router;
