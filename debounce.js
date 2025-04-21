/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-19 09:25:37
 * @LastEditTime: 2025-04-19 10:28:03
 * @LastEditors: renlirong
 */
// Question
// 实现防抖

// Questio
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
        // clearTimeout清除之前的定时器(p.s.只清除定时器的回调，不清除定时器本身，就是说timer还是存在的)
        // 如果timer存在，说明上一个计时器没有结束，上一个fn还没有执行就调用了下一个fn。这时候不再做上一个fn的执行，直接执行本次fn
        if (timer) clearTimeout(timer)
        // setTimeout返回一个定时器的ID，fn执行结束后，timer会被清空
        timer = setTimeout(()=>{fn.call(this,args)},delay) //最好不用fn(args)，因为fn(args)指的是全局对象
    }
}
