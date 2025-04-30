/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 15:24:37
 * @LastEditTime: 2025-04-26 15:24:40
 * @LastEditors: renlirong
 */
function listToTree(list, idKey = 'id', parentKey = 'parentId') {
    const map = {}
    const roots = []
    
    // 创建哈希表
    list.forEach(node => {
      map[node[idKey]] = { ...node, children: [] }
    })
  
    // 构建树
    list.forEach(node => {
      const parentId = node[parentKey]
      if (parentId !== null && parentId !== undefined) {
        map[parentId]?.children.push(map[node[idKey]])
      } else {
        roots.push(map[node[idKey]])
      }
    })
  
    return roots
  }
  
  // 示例用法
  const list = [
    { id: 1, name: 'A', parentId: null },
    { id: 2, name: 'B', parentId: 1 },
    { id: 3, name: 'C', parentId: 1 },
    { id: 4, name: 'D', parentId: 2 }
  ]
  
  console.log(listToTree(list))