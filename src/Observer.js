import { Dep } from './Dep'

export class Observer {
  constructor(data){
    this.data = data
    this.walk(data)
  }
  walk(data){
    if (!data || typeof data !== 'object'){
      return
    }
    Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
  }
}

function defineReactive(data, key, val) {

  let dep = new Dep()

  // 监听属性
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      console.info(`${key}被读取了`)
      dep.depend(); // 收集依赖
      return val
    },
    set: function(newVal) {
      if (val === newVal) {
        return
      }
      console.info(`${key}属性被修改了,新值为${newVal}`)
      val = newVal

      dep.notify() //通知更新依赖 
    }
  })
    // 递归检测子属性
  new Observer(val)
  
}

