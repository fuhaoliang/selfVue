'use strict';

var _Observer = require('./Observer.js');

var _Watcher = require('./Watcher.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // import { Dep } from './Dep'


var SelfVue = function SelfVue(data, el, exp) {
  _classCallCheck(this, SelfVue);

  // this.data = data
  // this.el = el
  // this.exp = exp;
  new _Observer.Observer(data);
  new _Watcher.Watcher({ data: data }, 'str', function (value) {
    console.info('value--->', value);
  });
};

var data = {
  book: {
    name: 'vue-Observer'
  },
  str: '1234'
};

new SelfVue(data);
// console.info('data.str---->', data.str = 123)

setTimeout(function () {
  data.str = 'canfoo';
  data.str = '1234';
}, 2000);