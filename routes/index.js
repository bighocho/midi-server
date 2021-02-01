var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/midi', function(req, res, next) {
  var params = req.query
  console.log(params)
  res.render('index', { title: 'Express' });
});

module.exports = router;
