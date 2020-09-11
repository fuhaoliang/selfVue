'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dep = require('./Dep');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = exports.Observer = function () {
  function Observer(data) {
    _classCallCheck(this, Observer);

    this.data = data;
    this.walk(data);
  }

  _createClass(Observer, [{
    key: 'walk',
    value: function walk(data) {
      if (!data || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
        return;
      }
      Object.keys(data).forEach(function (key) {
        return defineReactive(data, key, data[key]);
      });
    }
  }]);

  return Observer;
}();

function defineReactive(data, key, val) {
  console.info('data, key, val--->', data, key, val);

  var dep = new _Dep.Dep();

  // 监听属性
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function get() {
      dep.depend(); // 收集依赖
      return val;
    },
    set: function set(newVal) {
      if (val === newVal) {
        return;
      }
      console.info(key + '\u5C5E\u6027\u88AB\u4FEE\u6539\u4E86,\u65B0\u503C\u4E3A' + newVal);
      val = newVal;

      dep.notify(); //通知更新依赖 
    }
  });
  // 递归检测子属性
  new Observer(val);
}