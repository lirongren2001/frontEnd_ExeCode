好的！以下是所有手写代码题的具体功能要求和配套测试用例说明，你可以在写完代码后直接运行这些测试用例验证正确性：

---

4. 并发控制调度器
要求：实现 `Scheduler` 类，`add` 方法添加异步任务，同时最多执行2个任务
```javascript
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
```

---

6. 竞态请求控制
要求：实现 `raceRequests` 函数，3个请求中任意两个成功则返回结果，两个失败则报错
```javascript
// 测试用例1：两个成功一个失败
const req1 = () => new Promise((res) => setTimeout(() => res(1), 100));
const req2 = () => new Promise((res) => setTimeout(() => res(2), 200));
const req3 = () => new Promise((res, rej) => setTimeout(() => rej('err'), 300));
raceRequests([req1, req2, req3]).then(console.log); // 应该输出 [1,2]

// 测试用例2：两个失败
const reqA = () => new Promise((res, rej) => setTimeout(() => rej('A'), 100));
const reqB = () => new Promise((res, rej) => setTimeout(() => rej('B'), 200));
raceRequests([reqA, reqB, req3]).catch(console.log); // 应该输出 ['A','B']

// 测试用例3：三个成功
const successAll = [() => Promise.resolve(1), () => Promise.resolve(2), () => Promise.resolve(3)];
raceRequests(successAll).then(console.log); // 输出前两个成功的结果（顺序由完成顺序决定）
```

---

7. Promise.allSettled
要求：实现 `Promise.allSettled` 的 polyfill
```javascript
// 测试用例
const promises = [
  Promise.resolve(1),
  Promise.reject('error'),
  new Promise(res => setTimeout(() => res(3), 1000))
];

myAllSettled(promises).then(results => {
  console.log(results);
  /* 应该输出：
  [
    { status: "fulfilled", value: 1 },
    { status: "rejected", reason: "error" },
    { status: "fulfilled", value: 3 }
  ]
  */
});
```

---

9. async/await polyfill
要求：用生成器+Promise实现 `asyncToGenerator` 函数
```javascript
// 测试用例
function* mockAsyncFunc() {
  yield new Promise(r => setTimeout(r, 1000));
  console.log('1秒后输出');
  const result = yield Promise.resolve(42);
  console.log('Resolved value:', result);
  return 'done';
}

const convertedFunc = asyncToGenerator(mockAsyncFunc);
convertedFunc().then(res => console.log('Final result:', res));

/* 正确输出顺序：
（1秒后）
1秒后输出
Resolved value: 42
Final result: done
*/
```

---

10. 超时控制函数
要求：实现 `withTimeout` 包装器
```javascript
// 测试用例1：正常完成
const fastPromise = () => new Promise(r => setTimeout(() => r('success'), 500));
withTimeout(fastPromise(), 1000).then(console.log); // 应该输出 "success"

// 测试用例2：超时失败
const slowPromise = () => new Promise(r => setTimeout(() => r('success'), 1500));
withTimeout(slowPromise(), 1000).catch(err => console.log(err.message)); // 应输出 "Timeout"

// 测试用例3：原始Promise拒绝
const rejectPromise = () => new Promise((_, rej) => setTimeout(() => rej(new Error('Fail')), 500));
withTimeout(rejectPromise(), 1000).catch(err => console.log(err.message)); // 应输出 "Fail"
```

---

11. 断点续传上传组件
要求：实现 `Uploader` 类
```javascript
// 测试用例
const mockUpload = (chunk, retries = 0) => 
  new Promise((res, rej) => 
    setTimeout(() => {
      if (retries < 2 && Math.random() < 0.3) {
        rej('网络错误');
      } else {
        res(`${chunk}上传成功`);
      }
    }, 100)
  );

const uploader = new Uploader({
  chunks: ['a', 'b', 'c', 'd', 'e'],
  uploadFn: mockUpload,
  parallel: 3
});

uploader.start();

// 观察控制台输出是否符合：
// - 同时上传3个分片
// - 失败的分片会自动重试（最多2次）
// - 最终所有分片成功后输出合并完成
```

---

12. Observable事件流
要求：实现带操作符的 Observable 类
```javascript
// 测试用例
const observable = new Observable(observer => {
  let count = 0;
  const timer = setInterval(() => {
    observer.next(count++);
    if (count > 5) clearInterval(timer);
  }, 100);
});

observable
  .map(x => x * 2)
  .filter(x => x > 3)
  .debounceTime(150)
  .subscribe({
    next: v => console.log('Got:', v),
    complete: () => console.log('Complete')
  });

/* 预期输出（时间敏感）：
Got: 4  (原始值2, map后4)
Got: 6  (原始值3, map后6)
Got: 8  (原始值4, map后8)
Got: 10 (原始值5, map后10)
Complete
*/
```

---

每个测试用例都覆盖了核心要求的关键路径，编写代码时可以参考这些测试用例的预期行为验证功能正确性。完成后可以直接运行这些测试代码验证你的实现。