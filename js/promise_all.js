/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:22:22
 * @LastEditors: renlirong
 * @LastEditTime: 2025-04-21 19:36:06
 * @Description: 
 */
// 实现 myPromiseAll 函数
const myPromiseAll = (promises) => {
    // 你的实现

  };
  
// 用例：验证全部 Promise 成功及结果顺序
// const p0 = new Promise((resolve,reject) => setTimeout(() => reject(1), 1000));
const p1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 3000));

myPromiseAll([p1, p2,p3])
.then(results => {
    console.log(results)
});

// myPromiseAll([p0, p1, p2, p3])
// .then(results => {
//     console.log(results)
// });



// Answer
// const myPromiseAll = (promises) => {
//   // 你的实现
//   res = new Array(promises.length)
//   let count = 0
//   return new Promise((resolve,reject)=>{
//     promises.forEach((promise,idx)=>{
//       promise.then((r)=>{
//         res[idx] = r
//         count++
//         if (count === promises.length){
//           resolve(res)
//         }
//       },(err)=>{
//         reject(err)
//       }).catch((err)=>{
//         reject(err)
//       })
//     })
    
//   })
// };