/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 10:53:00
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:15:46
 * @Description: 
 */
// 实现 Function.prototype.myApply
Function.prototype.myApply = function(context, argsArray) {
    // 你的实现

  };
  
  // 用例 1: 数组参数传递
  function multiply(a, b) { return a * b; }
  console.log(multiply.myApply(null, [4, 5])); // 应输出 20
  
  // 用例 2: 类数组对象
  function concat() { return Array.from(arguments).join(""); }
  console.log(concat.myApply(null, { 0: "A", 1: "B", length: 2 })); // 应输出 "AB"


// Answer
// Function.prototype.myApply = function(context, argsArray) {
//     // 你的实现
//     context = (context !== undefined && context !== null )?Object(context):globalThis
//     const args = argsArray ? Array.from(argsArray) : []; // 处理参数：将类数组对象转为数组或空数组
//     let fn = Symbol()
//     context[fn] = this
//     let result = context[fn](...args)
//     delete context[fn]
//     return result
//   };
  