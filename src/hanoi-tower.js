const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let speed = Math.floor(turns / (turnsSpeed / 3600));
  let res = { turns: turns, seconds: speed };
  return res;
};
