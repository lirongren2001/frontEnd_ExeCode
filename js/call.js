/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 10:52:56
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:07:56
 * @Description: 
 */
// Question
// 实现 Function.prototype.myCall
Function.prototype.myCall = function(context, ...args) {
    // 你的实现
  };
  
// 用例 1: 改变 this 指向
const obj = { value: 100 };
function getValue() { return this.value; }
console.log(getValue.myCall(obj)); // 应输出 100

// 用例 2: 传递参数
function sum(a, b) { return a + b; }
console.log(sum.myCall(null, 3, 5)); // 应输出 8


// Answer
// Function.prototype.myCall = function(context, ...args) {
//     // 你的实现
//     context = (context!==undefined && context!== null)?Object(context):globalThis // windows只能在浏览器
//     let fn = Symbol()
//     context[fn] = this
//     let result = context[fn](...args)
//     delete context[fn]
//     return result
//   };
  