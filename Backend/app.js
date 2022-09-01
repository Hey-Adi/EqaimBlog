const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const file_upload = require('express-fileupload');
const compression = require('compression');

// Connecting Database
require('./db/conf')(process.env.DB_LINK||'mongodb://localhost:27017/EqaimBlog');
// Connecting Database

const articleRoute = require('./routes/articles');

const app = express();

// Compression
app.use(compression({
  level: 6,
  threshold: 10 * 1000,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }
    // fallback to standard filter function
    return compression.filter(req, res)
  }
}))
// Compression

// Others but main
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
// Others but main

// Routes
app.use('/blog',file_upload({limits: { fileSize: 50 * 1e+6 }}),articleRoute);
// Routes

module.exports = app;