/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-25 13:47:58
 * @LastEditTime: 2025-04-25 14:17:46
 * @LastEditors: renlirong
 */
// 手写promise
class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.callbacks = [];
  
      const resolve = (value) => {
        if (this.state !== 'pending') return;
        this.state = 'fulfilled';
        this.value = value;
        this.callbacks.forEach(cb => cb.onFulfilled(value));
      };
  
      const reject = (reason) => {
        if (this.state !== 'pending') return;
        this.state = 'rejected';
        this.value = reason;
        this.callbacks.forEach(cb => cb.onRejected(reason));
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        const handle = (fn) => {
          setTimeout(() => {
            try {
              const result = fn ? fn(this.value) : this.value;
              resolve(result);
            } catch (error) {
              reject(error);
            }
          });
        };
  
        if (this.state === 'fulfilled') handle(onFulfilled);
        else if (this.state === 'rejected') handle(onRejected);
        else this.callbacks.push({ onFulfilled: () => handle(onFulfilled), onRejected: () => handle(onRejected) });
      });
    }
  }


class MyPromise{
    constructor(executor){
        this.state = 'pending'     
        const resolve = ()=>{
            this.state = 'fullfilled'
        }
        const reject = ()=>{
            this.state = 'rejected'
        }
        executor(resolve,reject)
    }

    then(onFulfilled,onRejected){
        return new MyPromise((resolve,reject)=>{
            const handle = (fn)=>{
                setTimeout(()=>{
                    try{
                        const result = fn
                        resolve(result) 
                    }catch(err){
                        reject(err)
                    }
                },0)
            }

            if (this.state === 'fullfilled') handle(onFulfilled)
            else if (this.state === 'rejected') handle(onRejected)
            

        })

    }
}