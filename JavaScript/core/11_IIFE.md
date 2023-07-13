# IIFE

즉시 실행 함수식 <br/>
전역을 오염시지키 않기 위함 <br/>
코드를 보호하는 캡슐화가 목적 <br/>

###

IIFE를 변수에 할당하면 IIFE 자체는 저장되지 않고 함수가 실행된 결과만 저장

```js
let IIFE = (function () {
  // 전역에서 접근이 불가능한 영역

  return function () {}; // return값이 IIFE에 담김
})();

console.log(IIFE);
```
