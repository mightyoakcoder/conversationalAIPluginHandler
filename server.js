var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var vegOptionsRouter = require('./routes/vegOptions');
var myProgramRouter = require('./routes/myProgram');


var openapi = require('openapi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var corsOptions = {
  origin: ["https://chat.openai.com", "http://localhost:3000"]
}
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/vegOptions', vegOptionsRouter);
app.use('/myProgram', myProgramRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/docs/:id', function(req,res,next) {
  res.json({msg: "This is CORS-enabled for all origins!"})
})

app.listen(3000, function() {
  console.log("CORS-enabled web server listening on port 3000")
})

app.use(function (err, req, res, next) {
  res.status(err.status).json(err);
})

return app;