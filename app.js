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