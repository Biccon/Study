var express = require('express');
var app = express();

app.use('/', express.static('test'));

app.get('/login', function(req, res){
	var username = req.query['username'];
	var password = req.query['password'];

	var result = {};

	if(username == "admin" && password == "1234"){
		result.status = "success";
	} else {
		result.status = "fail";
	}
	res.json(result);
});

app.listen(8080);