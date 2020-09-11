import { Dep } from './Dep'

export class Watcher{
  constructor(vm, exp, cd){
    this.vm = vm
    this.exp = exp
    this.cd = cd
    this.value = this.get(); //初始化时自定添加到订阅器
  }
  update(){
    let oldValue = this.value;
    let value = this.vm.data[this.exp];

    console.info('旧值-->', oldValue, '新值', value)

    if (value !== oldValue) {
      this.value = value
      this.cd.call(this.vm, value, oldValue)
    }
  }
  get(){
    // 获取真是到值，以及自己触发此值到get 注入订阅收集器
    Dep.target = this
    let value = this.vm.data[this.exp] // 执行数据的get逻辑
    Dep.target = undefined

    return value
  }
}