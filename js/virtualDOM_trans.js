/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 22:52:55
 * @LastEditTime: 2025-04-24 22:53:07
 * @LastEditors: renlirong
 */
// 实现简单 Virtual DOM 转真实 DOM
function render(vnode) {
    // 处理文本节点
    if (typeof vnode === 'string') {
      return document.createTextNode(vnode);
    }
  
    // 创建元素
    const el = document.createElement(vnode.tag);
  
    // 设置属性（包括事件）
    if (vnode.props) {
      Object.entries(vnode.props).forEach(([key, value]) => {
        if (key.startsWith('on') && typeof value === 'function') {
          // 处理事件（如 onClick）
          const eventName = key.toLowerCase().substring(2);
          el.addEventListener(eventName, value);
        } else {
          el.setAttribute(key, value);
        }
      });
    }
  
    // 递归处理子节点
    if (vnode.children) {
      vnode.children.forEach(child => {
        el.appendChild(render(child));
      });
    }
  
    return el;
  }

  const vnode = {
    tag: 'div',
    props: { class: 'container' },
    children: [
      { tag: 'p', children: 'Hello' },
      { tag: 'button', props: { onClick: () => alert('ok') } }
    ]
  };

  