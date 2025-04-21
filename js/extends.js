/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:24:13
 * @LastEditors: renlirong
 * @LastEditTime: 2025-04-21 20:43:13
 * @Description: 
 */
// 组合继承实现
function Animal(name) { this.name = name; }
Animal.prototype.eat = () => console.log("Eating");

// 你的组合继承实现
function Dog(name) {
}

// 寄生组合继承优化
function Cat(name) {
}

// 用例验证
const dog = new Dog("Buddy");
dog.eat(); // 应输出 "Eating"
console.log(dog instanceof Animal); // 应输出 true

const cat = new Cat("Whiskers");
console.log(cat.__proto__ === Cat.prototype); // 应输出 true
console.log(cat instanceof Animal);           // 应输出 true

// Answer
// function Dog(name) {
//   Animal.call(this,name)
// }
// Dog.prototype = new Animal()
// Dog.prototype.constructor = Dog

// // 寄生组合继承优化
// function Cat(name) {
//   Animal.call(this,name)
// }
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat