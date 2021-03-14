const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    this.chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw Error("THROWN");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishChain = this.chain.join("~~");
    this.chain = [];
    return finishChain;
  },
};

module.exports = chainMaker;
