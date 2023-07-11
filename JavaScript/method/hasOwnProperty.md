# hasOwnProperty

객체가 특정 프로퍼티를 가지고 있는지 확인하고 불리언으로 값을 반환합니다.

- 예기치 못한 상황에 따른 버그를 대비할 때
- 코드의 가독성 향상

```js
const obj = {
  a: 1,
};
obj.hasOwnProperty('a'); // true
obj.hasOwnProperty('b'); // false
```
