/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-27 10:28:12
 * @LastEditTime: 2025-04-27 11:00:05
 * @LastEditors: renlirong
 */
// 路由懒加载的实现
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// 使用 React.lazy 动态加载组件
const Home = lazy(() => import('./Home'));
const Users = lazy(() => import('./Users'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Suspense>
  );
}


