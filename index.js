var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var news = require('./routes/news');

var user = require('./routes/user');
var comments = require('./routes/comments');
var preferences = require('./routes/preferences');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/news', news);

app.use('/user', user);
app.use('/comments', comments);
app.use('/preferences', preferences);

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});