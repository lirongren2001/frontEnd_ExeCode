好的！以下是所有手写代码题的具体功能要求和配套测试用例说明，你可以在写完代码后直接运行这些测试用例验证正确性：

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
