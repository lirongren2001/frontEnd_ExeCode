/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-19 11:30:10
 * @LastEditTime: 2025-04-19 11:58:22
 * @LastEditors: renlirong
 */
// Question: 怎么用闭包解决异步循环输出问题？
// 修改以下代码
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // 全部输出3（经典问题）
    }, 100);
  }

// Answer
// 解决方案：为i创建闭包，创造独立的闭包域。
for (var i = 0; i<3;i++){
  // IIFE闭包
  (function(i){ // 这里必须是i，遮蔽了全局变量i
    setTimeout(() => {
      console.log(i); // 输出0，1，2
    }, 100);
  })(i)
}

for (var i = 0; i<3;i++){
  // 函数级闭包，效果相同
  const fn =(i)=>{ // 这里必须是i，遮蔽了全局变量i
    setTimeout(() => {
      console.log(i); // 输出0，1，2
    }, 100);
  }
  fn(i)
}
