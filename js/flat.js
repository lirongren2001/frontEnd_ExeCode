/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-21 21:22:42
 * @LastEditTime: 2025-04-21 22:25:29
 * @LastEditors: renlirong
 */
// Question: 实现数组扁平化

const flatten = (arr)=>{
    // Your Code
}


// Test
const nestedArray = [1, [2, [3, [4]], 5]];
console.log(flatten(nestedArray)); // 输出: [1, 2, 3, 4, 5]

// Answer 1: 逐层展开
// function flatten(arr) {
//     while(arr.some(item=>Array.isArray(item))){
//         arr = [].concat(...arr)
//     }
//     return arr
//   }

// Answer 2: 递归调用
// const flatten = (arr)=>{
//     // Your Code
//     return arr.reduce((all,i)=>all.concat(Array.isArray(i)?flatten(i):i),[])
// }