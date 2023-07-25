# promise

Promise 객체는 세 가지 상태를 가질 수 있습니다

대기(pending), 이행(fulfilled), 거부(rejected)

비동기 작업이 완료되는 시점에 성공 실패 결정

`then` 메서드는 fulfilled되거나 rejected된 경우에 실행할 콜백 함수를 등록

프라미스 executor는 무조건 한번은 호출함 (promise가 가지는 특징)

then에서 받는 코드 성공,실패 두개의 매개변수를 받음

promise의 resolve의 반환값은 then의 result의 알규먼트로 자동전달 됨

```js
let promise = new Promise(function(resolve, reject) {
  // executor
});

promise.then(
  function(result) { /* 결과(result)를 다룹니다 */ },
  function(error) { /* 에러(error)를 다룹니다 */ }
);
```
<!-- 1. 데이터 처리: 비동기 작업으로 받아온 데이터를 화면에 보여주거나 다른 처리를 수행합니다.
2. 상태 변경: 비동기 작업을 통해 서버에서 가져온 데이터로 애플리케이션의 상태를 변경합니다.
3. 알림: 사용자에게 작업이 성공적으로 완료되었다는 알림을 표시합니다.
4. 리다이렉션: 페이지 이동이나 라우팅을 수행하여 다른 페이지로 이동시킵니다.
5. 에러 처리: 비동기 작업이 성공적으로 완료되었지만 특정 조건에 따라 추가적인 처리가 필요한 경우, 추가적인 로직을 수행합니다.
6. 기타: 성공시에 필요한 다른 비즈니스 로직을 수행할 수도 있습니다. -->