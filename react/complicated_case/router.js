/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-26 16:25:23
 * @LastEditTime: 2025-04-26 16:29:33
 * @LastEditors: renlirong
 */
// 路由守卫三层校验：
// 未登录 → 跳转登录页
// 已登录但无权限 → 跳转401页
// 有权限 → 渲染组件

const PrivateRoute = ({ children, allowedRoles }) => {
    
}

// 用例
const App = () => {
  const [userRole, setUserRole] = useState(null); // 从登录接口获取实际角色

  return (
    <AuthProvider userRole={userRole}>
      <BrowserRouter>
        <div className="layout">
          {userRole && <Sidebar />}
          
          <Routes>
            {/* 公共路由 */}
            <Route path="/login" element={<LoginPage onLogin={setUserRole} />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />

            {/* 受保护路由 */}
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute allowedRoles={route.roles}>
                    <route.component />
                  </PrivateRoute>
                }
              />
            ))}

            {/* 默认重定向 */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};