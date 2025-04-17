/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 10:52:53
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:19:53
 * @Description: 
 */

// 实现 Function.prototype.myBind

Function.prototype.myCall = function(context, ...args) {
    // 你的实现
    context = (context!==undefined && context!== null)?Object(context):globalThis // windows只能在浏览器
    let fn = Symbol()
    context[fn] = this
    let result = context[fn](...args)
    delete context[fn]
    return result
  };

Function.prototype.myBind = function(context, ...args) {
    // 你的实现
    const fn = this
    return function(){
        return fn.myCall(context,...args)
    }
  };
  
  // 用例 1: 绑定 this 和部分参数
  const person = { name: "Alice" };
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  const boundGreet = greet.myBind(person, "Hello");
  boundGreet(); // 应输出 "Hello, Alice"
