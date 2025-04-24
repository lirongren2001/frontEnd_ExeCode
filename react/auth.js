/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 20:44:01
 * @LastEditTime: 2025-04-24 20:52:36
 * @LastEditors: renlirong
 */
// 实现路由级权限验证
// 要求：
// 未登录时重定向到登录页
// 保持原路由状态以便登录后跳回
// 使用React Router API
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
  // 使用示例：
  <Route path="/dashboard">
    <PrivateRoute isAuthenticated={user}>
      <Dashboard />
    </PrivateRoute>
  </Route>