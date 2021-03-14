const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  let newArr = [];
  if (matrix == undefined) {
    return 0;
  }
  for (let i = 0; i < matrix.length; i++) {
    newArr = newArr.concat(matrix[i]);
  }
  return newArr.filter((el) => el === "^^").length;
};
