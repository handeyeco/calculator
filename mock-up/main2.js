var calcApp = {
  base: null,
  current: null,
  operator: null,
  
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },

  sign: function (a) {
    return a * -1;
  },

  percent: function (a) {
    return a / 100;
  }
};
