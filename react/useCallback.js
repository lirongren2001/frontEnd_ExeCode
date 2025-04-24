// 需求：优化以下组件避免不必要的渲染

import { useState, memo, useCallback } from "react";
const TestComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const handleChildClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Render: {count}</button>
      <Child onClick={handleChildClick} />
    </div>
  );
};

export default TestComponent;

const Child = memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Child</button>;
});


// Answer：
// import { memo, useCallback } from 'react';

// // 优化后的Parent组件
// function Parent() {
//   const [count, setCount] = useState(0);
  
//   // 使用useCallback缓存函数引用
//   const handleClick = useCallback(() => {
//     setCount(c => c + 1);
//   }, []);

//   // 使用useCallback保持函数引用稳定
//   const childClickHandler = useCallback(() => {
//     console.log('click');
//   }, []);

//   return (
//     <div>
//       <button onClick={handleClick}>Render: {count}</button>
//       <Child onClick={childClickHandler} />
//     </div>
//   );
// }

// // 使用memo包裹子组件
// const Child = memo(({ onClick }) => {
//   console.log('Child render');
//   return <button onClick={onClick}>Child</button>;
// });