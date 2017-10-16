var router = require('express').Router();
var fs = require('fs');


router.get('/', function(req, res) {
	// core functionality
	res.render('index');
});

module.exports = router;
