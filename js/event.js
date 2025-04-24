/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 10:22:46
 * @LastEditTime: 2025-04-24 22:50:39
 * @LastEditors: renlirong
 */
// 发布订阅模式


class EventEmitter {
    constructor() {
      this.events = new Map(); // { eventName: [listeners] }
    }
  
    on(event, listener) {
      const listeners = this.events.get(event) || [];
      listeners.push(listener);
      this.events.set(event, listeners);
    }
  
    off(event, listener) {
      const listeners = this.events.get(event);
      if (listeners) {
        this.events.set(event, listeners.filter(l => l !== listener));
      }
    }
  
    emit(event, ...args) {
      const listeners = this.events.get(event);
      if (listeners) {
        listeners.forEach(listener => listener(...args));
      }
    }
  
    once(event, listener) {
      const wrapper = (...args) => {
        listener(...args);
        this.off(event, wrapper);
      };
      this.on(event, wrapper);
    }
  }