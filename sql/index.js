// Import other files within this directory to index.js
// Note: this directory's contents must be flat in order
// for the import to work correctly
"use strict";

var fs       = require("fs");
var path     = require("path");
var basename = path.basename(module.filename);
var sql  = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    var truncFile = file.split('.')[0];
    sql[truncFile] = require(path.join(__dirname, file));
  });

module.exports = sql;
