/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 19:04:22
 * @LastEditTime: 2025-04-24 19:18:28
 * @LastEditors: renlirong
 */
// 需求：实现一个支持搜索过滤的列表组件
// 输入框实时过滤列表
// 显示过滤后的结果
// 无结果时显示"Not Found"
const data = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ];
  import { useState } from "react";
  const TestComponent = () => {
    const [input, setInput] = useState(null);
    const [filterRes, setFilterRes] = useState("");
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
      const filterObj = data.filter((item) => item.id == e.target.value);
      filterObj.length
        ? setFilterRes(filterObj[0].name)
        : setFilterRes("Not Found");
    };
  
    return (
      <form>
        <label>搜索：</label>
        <input value={input} onChange={handleInputChange} />
        <h2>搜索结果：</h2>
        <h2>{filterRes}</h2>
      </form>
    );
  };
  export default TestComponent;
  