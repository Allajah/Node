var express = require('express');
var app = express();
require('./router/main.js')(app);
app.set('views',__dirname + 'views');
app.set('view engine' , 'jade');
app.engine('html',require('jade').renderFile)
var server = app.listen(3000,function(){
  console.log('We have started our server on port 3000');
});
