/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-20 15:17:35
 * @LastEditTime: 2025-04-20 15:58:17
 * @LastEditors: renlirong
 */

// 要求​​：实现 raceRequests 函数，3个请求中任意两个成功则返回马上结果，两个失败则马上报错


const req1 = () => new Promise((res) => setTimeout(() => res(1), 100));
const req2 = () => new Promise((res) => setTimeout(() => res(2), 200));
const req3 = () => new Promise((res, rej) => setTimeout(() => rej('err'), 300));
raceRequests([req1, req2, req3]).then(console.log); // 应该输出 [1,2]

// 测试用例2：两个失败
const reqA = () => new Promise((res, rej) => setTimeout(() => rej('A'), 100));
const reqB = () => new Promise((res, rej) => setTimeout(() => rej('B'), 200));
raceRequests([reqA, reqB, req3]).catch(console.log); // 应该输出 ['A','B']


// Answer
// const raceRequests =  function(arr){
//     const success = []
//     const fail = []
//     return new Promise((resolve,reject)=>{
//         arr.forEach(req => {
//             req().then((res)=>{
//                 success.push(res)
//                 if(success.length>=2){
//                     resolve(success)
//                 }

//             }).catch((err)=>{
//                 fail.push(err)
//                 if(fail.length>=2){
//                     reject(fail)
//                 }
//             })  
//         });
//     })    
// }