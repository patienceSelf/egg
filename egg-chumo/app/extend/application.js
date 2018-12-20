'use strict';
const BAR = Symbol('Application#bar');

module.exports = {
  foo(param) {
    console.log('扩展的application对象');
  },

  get bar() {
    if (!this[BAR]) {
      this[BAR] = 'test BAR';
    }
    return this[BAR];
  },
};
