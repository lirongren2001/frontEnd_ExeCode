/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 15:25:18
 * @LastEditTime: 2025-04-27 10:04:41
 * @LastEditors: renlirong
 */
function formatDate(date, format = 'yyyy-MM-dd') {
    const pad = n => n.toString().padStart(2, '0')
    
    return format
      .replace(/yyyy/g, date.getFullYear())
      .replace(/MM/g, pad(date.getMonth() + 1))
      .replace(/dd/g, pad(date.getDate()))
      .replace(/HH/g, pad(date.getHours()))
      .replace(/mm/g, pad(date.getMinutes()))
      .replace(/ss/g, pad(date.getSeconds()))
  }
  
  // 示例用法
  console.log(formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss')) // 2023-08-10 14:30:45