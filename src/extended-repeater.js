const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const defaultOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|",
  };
  str = String(str);
  options.repeatTimes = options.repeatTimes || defaultOptions.repeatTimes;
  options.separator = options.separator || defaultOptions.separator;
  if (options.hasOwnProperty("addition")) {
    options.addition = String(options.addition);
    options.additionRepeatTimes =
      options.additionRepeatTimes || defaultOptions.additionRepeatTimes;
    options.additionSeparator =
      options.additionSeparator || defaultOptions.additionSeparator;
  } else {
    options.addition = defaultOptions.addition;
  }
  const separator =
    options.addition != ""
      ? new Array(options.additionRepeatTimes)
          .fill(options.addition)
          .join(options.additionSeparator)
      : "";

  return new Array(options.repeatTimes)
    .fill(str + separator)
    .join(options.separator);
};
