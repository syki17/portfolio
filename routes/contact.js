var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact-me', function(req, res, next) {
  res.render('contact-me', { title: 'Portfolio' });
});

module.exports = router;
