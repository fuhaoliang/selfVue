'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Watcher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dep = require('./Dep');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Watcher = exports.Watcher = function () {
  function Watcher(vm, exp, cd) {
    _classCallCheck(this, Watcher);

    this.vm = vm;
    this.exp = exp;
    this.cd = cd;
    this.value = this.get(); //初始化时自定添加到订阅器
  }

  _createClass(Watcher, [{
    key: 'update',
    value: function update() {
      var oldValue = this.value;
      var value = this.vm.data[this.exp];

      console.info('旧值-->', oldValue, '新值', value);

      if (value !== oldValue) {
        this.value = value;
        this.cd.call(this.vm, value, oldValue);
      }
    }
  }, {
    key: 'get',
    value: function get() {
      // 获取真是到值，以及自己触发此值到get 注入订阅收集器
      _Dep.Dep.target = this;
      var value = this.vm.data[this.exp]; // 执行数据的get逻辑
      _Dep.Dep.target = undefined;

      return value;
    }
  }]);

  return Watcher;
}();