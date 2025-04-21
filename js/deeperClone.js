/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 10:26:37
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 10:32:05
 * @Description: 
 */

// Question
/* 你的深拷贝实现，无循环溢出 */
const deeperClone = (obj, hash = new WeakMap())=>{

}

// 验证深拷贝后的对象是否存在循环引用且无栈溢出
const cyclicObj = { a: 1 };
cyclicObj.self = cyclicObj;
const deepCopyCyclic = deeperClone(cyclicObj);
deepCopyCyclic.a = 10000
// 验证
console.log(cyclicObj.a)


// Answer
// const deeperClone = (obj, hash = new WeakMap())=>{
//     if(!obj || typeof obj !== 'object') return obj
//     if (hash.get(obj)) return hash.get(obj)
//     let newObj = Array.isArray(obj)?[]:{}
//     hash.set(obj,newObj)
//     for(let key in obj){
//         console.log(key)
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = deeperClone(obj[key],hash)
//         }
//     }
//     return newObj
// }
