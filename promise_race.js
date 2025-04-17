/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:22:24
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:22:52
 * @Description: 
 */
// 实现 myPromiseRace 函数
const myPromiseRace = (promises) => {
    // 你的实现
  };
  
// 用例：验证首个成功或失败的 Promise
const fastResolve = new Promise(resolve => setTimeout(resolve, 500, "成功"));
const slowReject = new Promise((_, reject) => setTimeout(reject, 1000, "失败"));

myPromiseRace([fastResolve, slowReject])
.then(value => {
    // 验证 value 应为 "成功"
});