# 숫자형

number 에서 많이 사용하는 메서드

```js
let number = 90_127.13100032;

// 내림
let floor = Math.floor(number);
console.log('floor : ', floor);

// 반올림
let round = Math.round(number);
console.log('round : ', round);

// 올림
let ceil = Math.ceil(number);
console.log('ceil : ', ceil);

// 절삭(소수점 이하)
let truncate = Math.trunc(number);
console.log('truncate : ', truncate);

// 난수
let random = Math.floor(Math.random() * 10);
console.log('random : ', random);

// 여러 수 중, 최댓값
let max = Math.max(10, 100, 1000, 123, 5555);

console.log('max : ', max);

// 여러 수 중, 최솟값
let min = Math.min(10, -10, -100, 123, 10000);
console.log('min : ', min);

// 거듭제곱
let pow = Math.pow(2, 53);
console.log('pow : ', pow);

// 절댓값
let abs = Math.abs(-1);
console.log('abs : ', abs);

// 최소, 최대 값 사이 난수 반환 함수
let getRandomMinMax = (min, max) => {
  if (min > max) throw new Error('최솟값은 최댓값보다 작아야 합니다.');
  return Math.round(Math.random() * (max - min) + min);
};

getRandomMinMax(5, 10); // 5 ~ 10 사이의 난수를 반환
```
