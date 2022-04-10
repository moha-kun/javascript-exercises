const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[^a-z]/g, "");
    return string.includes(string.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
