const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (
        typeof sampleActivity === "string" &&
        !isNaN(parseFloat(sampleActivity))
    ) {
        let num = parseFloat(sampleActivity);
        if (num <= MODERN_ACTIVITY && num > 0) {
            return Math.ceil(-(
                HALF_LIFE_PERIOD *
                1 *
                (Math.log10(MODERN_ACTIVITY / num) / Math.log10(1 / 2))
            ));
        }
    }
    return false;
};