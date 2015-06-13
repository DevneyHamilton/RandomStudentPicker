var express = require("express");
var app = express();
app.use(express.logger());


app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public/js '))


var port = process.env.PORT||5050;
app.listen(port,function(){
	console.log("Pick a Girl Who Codes app is listening on port " + port);
});