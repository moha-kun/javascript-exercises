const ctof = function (num) {
  num = (9 / 5) * num + 32;
  return Math.round(num * 10) / 10;
};

const ftoc = function (num) {
  num = (num - 32) * (5 / 9);
  return Math.round(num * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
