/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 10:21:31
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 10:24:19
 * @Description: 
 */


// Question

/* 你的浅拷贝实现 */
const swallowClone = (obj)=>{
    
}


const obj = { a: 1, b: { c: 2 } };
const shallowCopy = swallowClone(obj);
shallowCopy.b.c = 3;
// 验证原对象 obj.b.c 的值是否变化
console.log(obj.b.c)



// Answer
const swallowClone = (obj)=>{
    if(!obj || typeof obj !=="object") return obj
    let newObj = Array.isArray(obj)?[]:{}
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj
}