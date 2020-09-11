import { Observer } from './Observer.js';
import { Watcher } from './Watcher.js';

class SelfVue{
  constructor(data, el, exp) {
    this.data = data
    // 数据代理

    Object.keys(data).forEach(key => this.proxyKeys(key))

    new Observer(data)
    el.innerHTML = data[exp]; //初始化值
    new Watcher(this, exp, function(value){
      el.innerHTML = value
    })
    return this
  }
  proxyKeys(key) {
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: true,
      get: function() {
        return this.data[key]
      },
      set: function(value) {
        this.data[key] = value
      }
    })
  }
}

let el = document.querySelector('#name');

let selfVue = new SelfVue({ name: [1,2,3]}, el, 'name')


setTimeout(function () {
  selfVue.name.push(4)
}, 3000);