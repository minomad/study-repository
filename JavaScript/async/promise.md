# promise

Promise 객체는 세 가지 상태를 가질 수 있습니다

대기(pending), 이행(fulfilled), 거부(rejected)

비동기 작업이 완료되는 시점에 성공 실패 결정

`then` 메서드는 fulfilled되거나 rejected된 경우에 실행할 콜백 함수가 내장됨

executor는 무조건 한번은 호출함 (promise가 가지는 특징)

then에서 받는 코드 성공,실패 두개의 매개변수를 받음


```js
let promise = new Promise(function(resolve, reject) {
  // executor
});

promise.then(
  function(result) {}
).catch(
  function(error) {}
);
```
