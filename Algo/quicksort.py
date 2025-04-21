'''
Description: 
Author: renlirong
Date: 2025-04-21 22:49:18
LastEditTime: 2025-04-21 22:51:20
LastEditors: renlirong
'''
# 随机选择基准值（避免最坏情况）
import random
def quick_sort_optimized(arr):
    if len(arr) <= 1:
        return arr
    
    pivot_idx = random.randint(0, len(arr)-1)  # 随机选择基准索引
    pivot = arr[pivot_idx]
    
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]    # 处理重复元素
    right = [x for x in arr if x > pivot]
    
    return quick_sort_optimized(left) + middle + quick_sort_optimized(right)


test = [5,8,9,10,3,4,2,-2,0,1,1,2,177,87]
print(quick_sort_optimized(test))