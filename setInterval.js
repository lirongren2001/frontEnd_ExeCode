/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:24:28
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:25:26
 * @Description: 
 */
// 实现 mySetInterval 函数，支持循环调用和取消
const mySetInterval = (callback, interval) => {
    // 你的实现（返回取消函数）
  };
  
  // 用例：验证循环执行和取消
  let count = 0;
  const cancel = mySetInterval(() => {
    count++;
    console.log(`第 ${count} 次执行`);
    if (count === 3) cancel(); // 执行 3 次后停止
  }, 1000);