'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dep = exports.Dep = function () {
  function Dep() {
    _classCallCheck(this, Dep);

    this.subs = [];
  }

  _createClass(Dep, [{
    key: 'depend',
    value: function depend() {
      if (Dep.target) {
        console.info('监听者属性---->', Dep.target.exp);
        this.addSub(Dep.target);

        // console.info('this.subs---------->', this.subs)
      }
    }
  }, {
    key: 'addSub',
    value: function addSub(sub) {
      this.subs.push(sub);
    }
  }, {
    key: 'notify',
    value: function notify() {
      this.subs.forEach(function (sub) {
        return sub.update();
      });
    }
  }]);

  return Dep;
}();