/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-20 14:58:28
 * @LastEditTime: 2025-04-20 15:58:44
 * @LastEditors: renlirong
 */
// 要求​​：实现 Scheduler 类，add 方法添加异步任务，同时最多执行2个任务
// 测试用例

const scheduler = new Scheduler();

// 创建4个异步任务工厂函数（用setTimeout模拟延迟）
const taskFactory = (order, delay) => 
  () => new Promise(resolve => 
    setTimeout(() => {
      console.log(`执行任务 ${order}`);
      resolve();
    }, delay)
  );

scheduler.add(taskFactory(1, 4000)); // 4000ms后输出：执行任务1
scheduler.add(taskFactory(2, 3500)); // 3500ms后输出：执行任务2
scheduler.add(taskFactory(3, 1000)); // 任务1/2完成后，立即执行：执行任务3
scheduler.add(taskFactory(4, 500));  // 任务1/2完成后，立即执行：执行任务4

/* 正确执行顺序：
 立即执行任务1和2
 4000ms后任务1完成，执行任务3
 3500ms后任务2完成，执行任务4
 最终输出顺序：1、2、3、4（假设3500 < 4000）
 但实际时间轴需要符合并发控制逻辑
*/




// Answer 1
// class Scheduler{
//     constructor(){
//         this.max = 2
//         this.running = 0
//     }
//     add(fn){
//         if(this.running < this.max){
//             this.running++
//             fn().then(()=>{
//                 this.running--
//             })
//         }else{
//             setTimeout(()=>{
//                 this.add(fn)
//             },0)
//         }
//     }
// }


// Answer 2
// class Scheduler{
//     constructor(){
//         this.max = 2
//         this.running = 0
//         this.task = []
//     }
//     add(fn){
//         this.task.push(fn)
//         this.run()
//     }
//     run(){
//         while(this.task.length && this.running<this.max){
//             const t = this.task.shift()
//             this.running++
//             t().then(()=>{
//                 this.running--
//                 this.run()
//             })
//         }
//     }
    
// }