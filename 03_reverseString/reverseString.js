const reverseString = function (str) {
    if (str.length == 0) return "";
    let str1 = "";
    for (let i = 1; i <= str.length; i++) str1 += str.charAt(str.length - i);
    return str1;
};

// Do not edit below this line
module.exports = reverseString;
