/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 10:09:26
 * @LastEditors: renlirong
 * @LastEditTime: 2025-04-19 09:34:49
 * @Description: 
 */

// Question

/* 你的深拷贝实现 */
const deepClone = (obj)=>{
}

const mixedData = {
    num: 100,
    str: "hello",
    arr: [true, null, undefined],
    empty: {},
    unicode: Symbol("🚀")
  };
const deepCopy = deepClone(mixedData);
deepCopy.str = 'world';
// 验证是否修改
console.log(mixedData.str)


// Answer
const deepClone = (obj)=>{
    if(!obj || typeof obj !== 'object') return obj
    let newObj = Array.isArray(obj)?[]:{}
    for(let key in obj){
        console.log(key)
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj
}
