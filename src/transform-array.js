const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr instanceof Array) {
    let dip = "--discard-prev";
    let din = "--discard-next";
    let dp = "--double-prev";
    let dn = "--double-next";
    let result = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == din) {
        if (i == arr.length - 1) {
          continue;
        }
        result.push(null);
        i++;
        continue;
      } else if (arr[i] == dip) {
        if (i === 0) {
          continue;
        }
        result.pop();
        continue;
      } else if (arr[i] == dp) {
        if (i === 0) {
          continue;
        }
        result.push(result[result.length - 1]);
        continue;
      } else if (arr[i] == dn) {
        if (i == arr.length - 1) {
          continue;
        }
        result.push(arr[i + 1]);
        continue;
      }
      result.push(arr[i]);
    }

    return result.filter((item) => item != null);
  }
  throw Error();
};
