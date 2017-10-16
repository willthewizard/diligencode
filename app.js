const express = require('express');
const app = express();
var path = require('path');

app.set('view engine', 'hbs');



app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',require('./routes/mainRoutes'));
app.use('/documents',require('./routes/documentRoutes'));



app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!')
});
