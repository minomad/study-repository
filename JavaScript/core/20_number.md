# 숫자형

number 에서 많이 사용하는 메서드

```js
let number = 90_127.13100032;

// Math.floor 내림 정수로 반환
const roundDown = Math.floor(number);
console.log(roundDown); //

// Math.round 반올림
let round = Math.round(number);
console.log('round : ', round);

// Math.ceil 올림
let ceil = Math.ceil(number);
console.log('ceil : ', ceil);

// Math.trunc 절삭(소수점 이하)
let truncate = Math.trunc(number);
console.log('truncate : ', truncate);

// Math.random 난수를 반환
// 배열 요소 랜덤하게 반환할 때
let random = Math.floor(Math.random() * 10);
console.log('random : ', random);

// Math.max 최댓값
let max = Math.max(10, 100, 1000, 123, 5555);
console.log('max : ', max);

// Math.min 최솟값
let min = Math.min(10, -10, -100, 123, 10000);
console.log('min : ', min);

// Math.pow 거듭제곱
let pow = Math.pow(2, 53);
console.log('pow : ', pow);

// Math.abs 절댓값
let abs = Math.abs(-1);
console.log('abs : ', abs);

// 최소, 최대 값 사이 난수 반환 함수
let getRandomMinMax = (min, max) => {
  if (min > max) throw new Error('최솟값은 최댓값보다 작아야 합니다.');
  return Math.round(Math.random() * (max - min) + min);
};

getRandomMinMax(5, 10); // 5 ~ 10 사이의 난수를 반환
```
