/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:22:04
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:22:58
 * @Description: 
 */
// 实现 myNew 函数模拟 new 操作
const myNew = (constructor, ...args) => {
    // 你的实现
  };
  
// 用例：验证构造函数初始化及原型链
function Person(name) {
this.name = name;
}
const person = myNew(Person, "Alice");
// 验证 person.name 应为 "Alice"，且 person instanceof Person 为 true