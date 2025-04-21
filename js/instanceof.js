/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:24:08
 * @LastEditors: renlirong
 * @LastEditTime: 2025-04-21 20:48:20
 * @Description: 
 */
// 实现 myInstanceOf 函数，模拟 instanceof 行为
const myInstanceOf = (obj, constructor) => {
  // 你的实现

};

// 用例：验证原型链判断
class Parent {}
class Child extends Parent {}
const child = new Child();
console.log(myInstanceOf(child, Parent));  // 应输出 true
console.log(myInstanceOf([], Object));      // 应输出 true

// Answer
// const myInstanceOf = (obj, constructor) => {
//   // 你的实现
//   let target = obj.__proto__
//   while(target){
//     if (constructor.prototype === target) return true
//     else target = target.__proto__
//   }
//   return false
// };