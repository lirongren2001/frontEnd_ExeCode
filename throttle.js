// Question
// 实现节流


const throttleScroll = throttle(() => {
    console.log("处理滚动");
  }, 500);
  
  // 模拟高频滚动触发
  throttleScroll(); // 立即执行
  setTimeout(throttleScroll, 200); // 被忽略
  setTimeout(throttleScroll, 600); // 允许执行
  // 验证总执行次数是否为 2 次


// Answer
const throttle = (fn,delay)=>{
    let timer = null
    return (args)=>{
        if (!timer){
            timer = setTimeout(()=>{
                fn.call(this,args) // 最好不用fn(args)，因为fn(args)指的是全局对象
                timer = null
            },delay)
        }
    }
}