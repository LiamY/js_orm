var db_utils = {};

var queryString = function (stringFunc) {
  return stringFunc.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '');
};
db_utils.queryString = queryString;

// example usage
// var hello = function () {/*!
//   hello
//   world
//   select * from table;
// */};
//
// console.log(queryString(hello));

module.exports = db_utils;
