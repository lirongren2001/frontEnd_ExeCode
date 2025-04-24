/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 22:29:19
 * @LastEditTime: 2025-04-24 22:29:22
 * @LastEditors: renlirong
 */
// 给定 Promise 数组，按顺序执行（前一个 resolve 后再执行下一个）
function runPromisesInSequence(promises) {
    return promises.reduce(
      (prev,current)=>{
      return prev.then(()=>{return current()})
      // return prev.then(()=> current()) 也可以
    },Promise.resolve())
  }
  
  
  
  const p1 = () => new Promise(resolve => setTimeout(() => { console.log(1); resolve() }, 1000));
  const p2 = () => new Promise(resolve => setTimeout(() => { console.log(2); resolve() }, 500));
  const p3 = () => new Promise(resolve => setTimeout(() => { console.log(3); resolve() }, 200));
  
  runPromisesInSequence([p1, p2, p3]).then(() => console.log('所有任务完成'));
  // 输出：1 → 2 → 3 → 所有任务完成