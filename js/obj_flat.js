/*
 * @Description:
 * @Author: renlirong
 * @Date: 2025-04-26 15:12:44
 * @LastEditTime: 2025-04-26 15:26:53
 * @LastEditors: renlirong
 */
// Question: 实现对象扁平化
// 5.手写列表转树 · 6.日期时间格式化 · 7.数字千分位.

function flattenObject(obj) {
    const result = {};
  
    function recurse(current, prefix) {
      if (typeof current !== 'object' || current === null) {
        result[prefix] = current;
        return;
      }
  
      const isPlainObject = Object.prototype.toString.call(current) === '[object Object]';
      const isArray = Array.isArray(current);
  
      if (!isPlainObject && !isArray) {
        result[prefix] = current;
        return;
      }
  
      for (const key in current) {
        if (current.hasOwnProperty(key)) {
          const newKey = prefix ? `${prefix}.${key}` : key;
          recurse(current[key], newKey);
        }
      }
    }
  
    recurse(obj, '');
    return result;
  }
  
  // 示例用法
  const obj = {
    a: { b: 1 },
    arr: [1, { c: 2 }]
  };
  
  console.log(flattenObject(obj));
  // 输出: { 'a.b': 1, 'arr.0': 1, 'arr.1.c': 2 }