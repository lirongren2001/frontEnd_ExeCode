/*
 * @Author: lirongren2001
 * @Date: 2025-04-17 10:52:43
 * @LastEditors: lirongren2001
 * @LastEditTime: 2025-04-17 10:54:50
 * @Description: 
 */
// 实现 myAJAX 函数，支持 GET/POST 和异步回调
const myAJAX = (method, url, data, headers, success, error) => {
    // 你的实现
    
  };
  
  // 用例 1: GET 请求
  myAJAX(
    'GET', 
    'https://api.example.com/data', 
    null,
    { 'Content-Type': 'application/json' },
    (response) => console.log("成功:", response),
    (err) => console.log("失败:", err)
  );
  
  // 用例 2: POST 请求
  myAJAX(
    'POST', 
    'https://api.example.com/save', 
    JSON.stringify({ id: 1 }),
    { 'Authorization': 'Bearer token' },
    (response) => console.log("保存成功"),
    (err) => console.log("保存失败")
  );