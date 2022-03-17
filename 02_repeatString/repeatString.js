const repeatString = function (str, num) {
    return num < 0 ? "ERROR" :
        num === 0 ? "" :
            str + repeatString(str, num - 1);
};

// Do not edit below this line
module.exports = repeatString;
