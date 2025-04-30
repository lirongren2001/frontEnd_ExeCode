/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 10:38:41
 * @LastEditTime: 2025-04-27 09:54:34
 * @LastEditors: renlirong
 */
// 判断容器是否滚动到了底部

// html中css设置container高度 500px
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    ...
</div>

// js




// const container = document.querySelector('.container');

// container.addEventListener('scroll', () => {
//   const offset = container.scrollHeight - container.scrollTop;
//   const delta = 50;
  
//   console.log(offset)

//   if (offset <= (500 + delta)) {
//     // 可以设置滚动锁，锁定滚动监听
//     const newDom = document.createElement('div');
//     newDom.setAttribute('class', 'item');
//     newDom.innerText = '我是新加的';
//     container.appendChild(newDom)
//   }
// })
