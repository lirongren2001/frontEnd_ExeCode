/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:24:13
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:25:12
 * @Description: 
 */
// 组合继承实现
function Animal(name) { this.name = name; }
Animal.prototype.eat = () => console.log("Eating");
function Dog(name) {
  // 你的组合继承实现（调用父类构造函数）
}
// 设置 Dog 的原型链继承 Animal 方法（组合继承）

// 寄生组合继承优化
function Cat(name) {
  // 你的寄生组合继承实现（避免重复调用父类构造函数）
}
// 设置 Cat 的原型链继承 Animal 方法（寄生组合继承）

// 用例验证
const dog = new Dog("Buddy");
dog.eat(); // 应输出 "Eating"
console.log(dog instanceof Animal); // 应输出 true

const cat = new Cat("Whiskers");
console.log(cat.__proto__ === Cat.prototype); // 应输出 true
console.log(cat instanceof Animal);           // 应输出 true