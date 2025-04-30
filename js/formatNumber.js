/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 15:25:39
 * @LastEditTime: 2025-04-26 15:25:41
 * @LastEditors: renlirong
 */
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
  // 改进版（支持小数）
  function formatNumberWithDecimal(num) {
    const parts = num.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }
  
  // 示例用法
  console.log(formatNumber(123456789))       // 123,456,789
  console.log(formatNumberWithDecimal(123456789.1234)) // 123,456,789.1234