const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    return Object.values(members)
        .filter((e) => typeof e == "string")
        .map((str) => str.trim().toUpperCase())
        .sort()
        .map((memb) => memb[0])
        .join("")
        .toString();
};