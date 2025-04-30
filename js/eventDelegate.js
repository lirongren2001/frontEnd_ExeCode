/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 15:26:06
 * @LastEditTime: 2025-04-26 15:26:21
 * @LastEditors: renlirong
 */
function delegate(parent, eventType, selector, handler) {
    parent.addEventListener(eventType, function(e) {
      let target = e.target
      while (target && target !== parent) {
        if (target.matches(selector)) {
          handler.call(target, e)
          break
        }
        target = target.parentNode
      }
    })
  }
  
  // 示例用法
  delegate(document.body, 'click', '.item', function(e) {
    console.log('Clicked item:', this.textContent)
  })