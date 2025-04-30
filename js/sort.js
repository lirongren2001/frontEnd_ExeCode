/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-25 13:48:59
 * @LastEditTime: 2025-04-25 14:43:30
 * @LastEditors: renlirong
 */
// sort排序
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];  // 基准选第一个元素
    const left = [], right = [];
    for (const num of arr.slice(1)) (num < pivot ? left : right).push(num);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  // 测试
  console.log(quickSort([3,1,4,2])); // [1,2,3,4]
  console.log(quickSort([5,2,9,1,5,6])); // [1,2,5,5,6,9]


