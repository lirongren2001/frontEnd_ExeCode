/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 22:51:27
 * @LastEditTime: 2025-04-24 22:52:36
 * @LastEditors: renlirong
 */
// 实现字符串首字母大写
function capitalize(str) {
    return str
      .trim() // 去除首尾空格
      .split(/\s+/) // 按空格分割（处理多个空格）
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');
  }

  console.log(capitalize(' hello   world '))