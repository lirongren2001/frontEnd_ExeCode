/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:21:59
 * @LastEditors: renlirong
 * @LastEditTime: 2025-04-21 20:20:32
 * @Description: 
 */
// 实现 myCurry 函数，支持多参数分步传递
const myCurry = (fn) => {
  // 你的实现

};

// 用例：验证分步传参和立即执行
const sum = (a, b, c) => a + b + c;
const curriedSum = myCurry(sum);
console.log(curriedSum(1)(2)(3)); // 应输出 6
console.log(curriedSum(1, 2)(3)); // 应输出 6

// Answer
// const myCurry = (fn) => {
//   // 你的实现
//   return currying(fn,fn.length)
//   function currying(f,argLen){ 
//     return function(...args){
//       if (args.length >= argLen){
//         return f.call(this,...args)
//       }else{
//         return currying(f.bind(this,...args),argLen-args.length)
//       }
//     }
//   }
// };