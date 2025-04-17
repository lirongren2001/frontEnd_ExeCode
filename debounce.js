// Question
// 实现防抖

const debounceSearch = debounce((query) => {
    console.log("搜索请求:", query);
  }, 300);
  
// 模拟用户连续输入
debounceSearch("a");
debounceSearch("ab");
debounceSearch("abc");
// 验证是否仅最后一次调用执行，输出 "搜索请求: abc"

// Answer
const debounce = (fn,delay)=>{
    let timer = null
    return (args)=>{
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{fn.call(this,args)},delay) //最好不用fn(args)，因为fn(args)指的是全局对象
    }
}