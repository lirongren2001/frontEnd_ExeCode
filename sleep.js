/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 11:24:22
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 11:25:18
 * @Description: 
 */
// 实现 mySleep 函数，延迟指定毫秒后继续执行
const mySleep = (delay) => {
    // 你的实现（需支持 Promise）
  };
  
  // 用例：验证异步延迟
  async function testSleep() {
    console.log("开始");
    await mySleep(2000);
    console.log("2秒后");
  }
  testSleep(); // 应间隔 2 秒输出两行日志