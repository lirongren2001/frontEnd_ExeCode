// 用高阶函数实现函数缓存（缓存函数输出的内容）


// Quesion
const adder = ()=>{
    
}



console.log(adder(2, 6))    // 输出结果: 开始缓存 8        // cache: { '[2, 6]': 8 }
console.log(adder(2, 6))    // 输出结果: 8                //cache: { '[2, 6]': 8 }
console.log(adder(10, 10))  // 输出结果: 开始缓存 20    // cache: { '[2, 6]': 8, '[10, 10]': 20 }
