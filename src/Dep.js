export class Dep {
  constructor() {
    this.subs = []
  }
  depend() {
    if (Dep.target) {
      console.info('监听者属性---->', Dep.target.exp)
      this.addSub(Dep.target)
    }
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify(){
    this.subs.forEach(sub => sub.update())
  }
}