const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const expressValidator = require('express-validator');
const LocalStrategy = require('passport-local').Strategy;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const flash = require('connect-flash');
const mongo = require('mongodb');
const mongoose = require('mongoose');

const db = mongoose.connection;

const routes = require('./routes/index');
const users = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

module.exports = app;