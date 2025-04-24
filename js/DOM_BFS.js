/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 22:51:06
 * @LastEditTime: 2025-04-24 22:51:14
 * @LastEditors: renlirong
 */
// DOM 树层级渲染（广度优先遍历）
function renderDomByLevel(root) {
    const result = [];
    if (!root) return result;
  
    const queue = [root];
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        currentLevel.push(node);
  
        // 将子节点加入队列
        if (node.children) {
          queue.push(...node.children);
        }
      }
  
      result.push(currentLevel);
    }
  
    return result;
  }