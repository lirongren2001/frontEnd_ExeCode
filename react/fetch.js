/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 19:32:13
 * @LastEditTime: 2025-04-24 19:33:36
 * @LastEditors: renlirong
 */

// 自定义Hook：useFetch
// 需求：实现一个用于数据请求的自定义Hook
// 要求：
// 处理loading/error状态
// 自动发起请求
// 组件卸载时取消未完成请求（加分项）

function useFetch(url) {
    const [state, setState] = useState({});
    // 通过 useRef 持久化控制器实例
    const controllerRef = useRef(new AbortController());
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setState({ loading: true });
          const res = await fetch(url, {
            signal: controllerRef.current.signal // 可中止的fetch请求
          });
          const data = await res.json();
          setState({ data, loading: false });
        } catch (err) {
          if (err.name !== 'AbortError') {
            setState({ error: err, loading: false });
          }
        }
      };
  
      fetchData();
  
      return () => {
        // 组件卸载时中断请求
        controllerRef.current.abort();
      };
    }, [url]);
  
    return state;
  }