var queryString = function (stringFunc) {
  return stringFunc.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '');
};

// example usage
// var hello = function () {/*!
//   hello
//   world
//   select * from table;
// */};
//
// console.log(queryString(hello));

module.exports = queryString;
