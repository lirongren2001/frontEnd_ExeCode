/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 10:22:46
 * @LastEditTime: 2025-04-26 21:54:33
 * @LastEditors: renlirong
 */
// 发布订阅模式/观察者模式


class EventEmitter {
    constructor() {
      this.events = new Map(); // { eventName: [listeners] }
    }
  
    on(event, listener) {
        const listeners = this.events.get(event) || []; // 获取现有监听器数组
        listeners.push(listener);                       // 添加新监听器
        this.events.set(event, listeners);  
    }
  
    off(event, listener) {
      const listeners = this.events.get(event); // 获取监听器数组
      if (listeners) {
        this.events.set(event, listeners.filter(l => l !== listener)); // 过滤掉指定监听器
      }
    }
//   触发事件
    emit(event, ...args) {
      const listeners = this.events.get(event);
      if (listeners) {
        listeners.forEach(listener => listener(...args)); // 同步执行所有监听器
      }
    }
//   一次性监听。实现技巧​​：用包装函数包裹原始监听器，执行后自动解除绑定
    once(event, listener) {
        const wrapper = (...args) => {                  // 创建包装函数
            listener(...args);                            // 执行原始监听器
            this.off(event, wrapper);                    // 执行后自动移除
          };
          this.on(event, wrapper);                        // 注册包装函数
    }
  }

class EventEmitter{
    constructor(){
      this.event = new Map()
    }

    on(event,listener){
      const listeners = this.event.get(event)
      listeners.push(listener)
      this.event.set(event,listeners)
    }
    off(event,listener){
      const listeners = this.event.get(event)
      listeners.filter(l=>l!==listener)
      this.event.set(event,listeners)
    }
    emit(event,...args){


    }
    once(event,listener){
      const wrapper = (...args)=>{
        listener(...args)
        this.on(event,wrapper)
      }
      this.off(event,wrapper)

    }
}