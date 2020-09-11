import { Observer } from './Observer.js';
import { Watcher } from './Watcher.js';

class SelfVue{
  constructor(data, el, exp) {
    // this.data = data
    // this.el = el
    // this.exp = exp;
    new Observer(data)
    new Watcher({ data }, 'str', function(value){
      console.info('value--->', value)
    })
  }
}

// var data = {
//   book: {
//     name: 'vue-Observer',
//   },
//   str: '1234'
// }

// new SelfVue(data)
// // console.info('data.str---->', data.str = 123)

// setTimeout(function () {
//   data.str = 'canfoo';
//   data.str = '1234';
// }, 2000);