/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:22:22
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:22:39
 * @Description: 
 */
// 实现 myPromiseAll 函数
const myPromiseAll = (promises) => {
    // 你的实现
  };
  
// 用例：验证全部 Promise 成功及结果顺序
const p1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 3000));

myPromiseAll([p1, p2, p3])
.then(results => {
    // 验证 results 是否为 [1, 2, 3]
});