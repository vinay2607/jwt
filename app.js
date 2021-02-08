var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jwt', { useMongoClient: true });

app.get('/api', function (req, res)
{
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
app.use('/api/auth', AuthController);

var port = process.env.PORT || 3000;

app.listen(port, function ()
{
  console.log('Express server listening on port ' + port);
});