/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:21:59
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:25:00
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