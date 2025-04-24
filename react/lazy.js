// 需求：实现组件动态导入与加载状态
// 要求：
// 加载时显示loading状态
// 错误时显示错误信息
// 使用Suspense组件
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
  );
}

// 错误边界实现参考题3
