# spread syntax

전개구문

반복가능한 객체를 풀어서 요소 하나 하나로 전개 시킬 수 있습니다.

```js
const arr = [1, 2, 3, 4, 5];
const str = 'string';

console.log(...arr);
console.log(...str);
```

## 함수

```js
function sum(x, y, z) {
  return x + y + z;
}
const arr = [3, 6, 9];

const result = sum(...arr);

console.log(result); // 18
```

## 배열

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 복사
const arrCopy = [...arr1]; // [ 1, 2, 3 ]

// 추가
const arr3 = [1, 2, 3, ...arr2, 7, 8, 9]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 이어 붙이기
const arr4 = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]
```

## 객체
객체의 프로퍼티를 전개