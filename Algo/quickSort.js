function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      // 获取基准索引（此处使用 Lomuto 分区方案）
      const pivotIndex = partition(arr, left, right);
      
      // 递归排序左右子数组
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  function partition(arr, left, right) {
    // 优化点：随机选择基准（避免最坏情况）
    const randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    [arr[randomIndex], arr[right]] = [arr[right], arr[randomIndex]];
    const pivot = arr[right];
  
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        // 交换小于基准的元素到左侧
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    
    // 将基准放到正确位置
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
  }
  
  // 测试
  console.log(quickSort([3,1,4,2])); // [1,2,3,4]
  console.log(quickSort([5,2,9,1,5,6])); // [1,2,5,5,6,9]