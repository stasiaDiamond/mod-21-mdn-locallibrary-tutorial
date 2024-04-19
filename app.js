require("dotenv").config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

const app = express();

// Connect to the database
const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
  console.log("Connected to MongoDB");

  // After establishing the connection, switch to the correct database
  mongoose.connection.useDb('local_library_tutorial');
  console.log("Using database: local_library_tutorial");
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set("strictQuery", false);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tacocatRouter = require("./routes/tacocat");
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/tacocat", tacocatRouter);

// Error handling
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
