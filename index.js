var express = require('express');
var app = express();

app.use('/', express.static('htdocs'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/umd/'));
app.use('/mustache', express.static(__dirname + '/node_modules/mustache/'));

app.listen(3000, function() {
	console.log('listen on http://localhost:3000');
});
