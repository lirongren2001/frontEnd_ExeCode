/*
 * @Description:
 * @Author: renlirong
 * @Date: 2025-04-24 18:25:02
 * @LastEditTime: 2025-04-24 19:03:37
 * @LastEditors: renlirong
 */
// 需求：实现包含用户名和密码输入的登录表单，要求：
// 表单提交时验证非空
// 密码输入显示为密文
// 提交时console.log表单数据
// 提交后清空输入
import { useState } from "react";
const TestComponent = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // 验证非空
    e.preventDefault();
    console.log(userName, passWord);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>用户名：</label>
      <input value={userName} onChange={onUserNameChange} required />
      <label>密码：</label>
      <input
        type="password"
        value={passWord}
        onChange={onPasswordChange}
        required
      />
      <button>提交</button>
    </form>
  );
};
export default TestComponent;
