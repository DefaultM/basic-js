const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.chars = "abcdefghijklmnopqrstuvwxyz";
  }
  repeatKey(str, n) {
    var r = str;
    while (r.length < n) {
      r += r;
    }
    return r.substring(0, n);
  }
  crypt(message, key, enc = true) {
    if (arguments.length <= 1) {
      throw new Error();
    }
    const lMsg = message.toLowerCase();
    let lKey = key.toLowerCase();
    let pwd = this.repeatKey(lKey, lMsg.length);
    let result = "";
    let lenChar = this.chars.length;
    let trig = 0;

    for (let l of lMsg) {
      if (this.chars.indexOf(l) < 0) {
        result += l;
      } else {
        result += this.chars[
          this.chars.indexOf(
            this.chars[
              (this.chars.indexOf(l) +
                (enc
                  ? this.chars.indexOf(pwd[trig++])
                  : lenChar - this.chars.indexOf(pwd[trig++]))) %
                lenChar
            ]
          )
        ];
      }
    }
    return this.direction
      ? result.toUpperCase()
      : result.toUpperCase().split("").reverse().join("");
  }
  encrypt(message, key) {
    return this.crypt(message, key);
  }
  decrypt(message, key) {
    return this.crypt(message, key, false);
  }
}

module.exports = VigenereCipheringMachine;
