/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:24:08
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:25:07
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