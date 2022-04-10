const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function () {
  let args = Array.from(arguments[0]);
  args.unshift(0);

  for (let i = 0; i < args.length; i++) {
    args[0] += args[i];
  }

  return args[0];
};

const multiply = function () {
  let args = Array.from(arguments[0]);
  args.unshift(1);

  for (let i = 0; i < args.length; i++) {
    args[0] *= args[i];
  }

  return args[0];
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (args) {
  return args ? args * factorial(args - 1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
