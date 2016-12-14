'use strict';

let express = require('express'),
	app = express(),
	http = require('http').Server(app);

app.use(express.static('./static'));

app.set('views', './server/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
	res.send(`<!doctype html>
<html>
<head>
<link rel="stylesheet" href="/css/main.css">
</head>
<body ng-app="wsi-code-test" ng-controller="MainCtrl">
<header>
	<h1>WSI Markup Challenge!!</h1>
	<user-panel></user-panel>
	<top-nav></top-nav>
</header>
<main ui-view></main>
<script src="/main.js"></script>
</body>
</html>`)
});

http.listen(3000, function(){
	console.log('Listening at port 3000');
});