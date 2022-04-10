const fibonacci = function (num) {
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    let arr = [1, 1, 0];
    for (let i = 0; i < num - 2; i++) {
        arr[2] = arr[1] + arr[0];
        arr[0] = arr[1];
        arr[1] = arr[2];
    }
    return arr[1];

};

// Do not edit below this line
module.exports = fibonacci;
