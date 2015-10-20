var express = require('express'),
    app = express(),
    moment = require('moment'),
    morgan = require('morgan');

app.use(morgan('common'));

app.use(express.static('./'));

app.listen(3000, function() {
  console.log('Server started');
});
