var express = require('express');
var parser = require('body-parser');
var path = require('path');

var router = require('./router.js');

var app = express();
app.use(parser.json());
app.use(express.static(path.join(__dirname, '../', '/public')));
app.use('/api', router);





app.listen(3000);
console.log('Listening on port', 3000);
