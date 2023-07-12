# from

문자열, 유사 배열 객체를 배열로 만들어 주는 메서드

```js
// 1. 문자열을 배열로 만드는 예시
console.log(Array.from('Hello'));
// [ 'H', 'e', 'l', 'l', 'o' ]

// 2. 유사 배열 객체를 배열로 만드는 예시
console.log(Array.from({ 0: '찬민', 1: '희진', 2: '태인', length: 3 }));
// [ '찬민', '희진', '태인' ]

// 3. 함수의 매개변수들을 순서대로 배열로 만드는 예시
const funcA = (...arguments) => {
  return Array.from(arguments);
};

console.log(funcA(1, 2, 3, 4, 5));
// [ 1, 2, 3, 4, 5 ]
```
