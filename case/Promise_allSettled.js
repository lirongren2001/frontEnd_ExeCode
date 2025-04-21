/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-20 15:59:39
 * @LastEditTime: 2025-04-20 16:20:37
 * @LastEditors: renlirong
 */
// 要求​​：实现 Promise.allSettled 的 polyfill

// 测试用例



const promises = [
    Promise.resolve(1),
    Promise.reject('error'),
    new Promise(res => setTimeout(() => res(3), 1000))
];

myAllSettled(promises).then(results => {
    console.log(results);
});

/* 应该输出：
[
    { status: "fulfilled", value: 1 },
    { status: "rejected", reason: "error" },
    { status: "fulfilled", value: 3 }
]
*/

// Answer 1
// function myAllSettled(promises){
//     const print = new Array(promises.length)
//     let count = promises.length
//     return new Promise((resolve)=>{
//         promises.forEach((promise,index) => {promise
//             .then((res)=>{print[index] = { status: "fulfilled", value: res }
//             count--
//         })
//             .catch((err)=>{ print[index] ={ rejected: "rejected", reason: err }
//             count--
//         })
//             .finally(()=>{
//                 if (!count){
//                     resolve(print)
//                 }
//             })
//         });
//     })

// }



// Answer 2
// function allSettled(promises) {
//   return Promise.all(promises.map(p => 
//     p.then(v => ({ status: 'fulfilled', value: v }))
//      .catch(e => ({ status: 'rejected', reason: e }))
//   ));
// }

