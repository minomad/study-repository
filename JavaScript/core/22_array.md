# array-methods

배열도 객체

배열에 올 수 있는 요소들 </br>
let arr = [10, 'abc', true, null, undefined, function(){}, {}];

### 기존 배열의 값을 변경하는 메서드

```js

  let arr = {
    '사과',
    '복숭아',
    '바나나',
    '포도',
  };

// push()
arr.push('수박'); //마지막 인덱스에 추가

// pop()
마지막 값을 삭제

// shift()
첫번째 값을 삭제

// unshift()
첫번째에 값을 추가

// splice(0,3)
0~3번까지 삭제

스택 = 후입선출
큐 - 선입선출

// reverse
const arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arr);  // [5, 4, 3, 2, 1]

// splice 맥가이버 칼 추가 제거
arr.splice(start, deleteCount, item1, item2, ...);
arr.splice(1, 0, 5, 13); // [1, 5, 13, 2, 3, 4, 5]

```

### 기존 배열의 값을 변경하지 않고 새로운 배열을 만들어서 값을 반환하는 메서드

```js
// concat()
// 배열에 다른 배열이나 값들을 연결하여서 새로운 배열을 생성

// slice(0,3)
//0번 인덱스에서 2번인덱스들로 이러우진 새로운 배열로 반환

// toSorted
arr.toSorted((a, b) => {
  return b - a;
});

// toReversed (시작,제거)
const toReversed = arr.toReversed();

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'js', 'css', 'react');

```

## 압도적으로 많이 사용하는 메서드

```js

let numbers = {1,9,7,5,3,2,};


// join()
// string으로 변환하는데 기본값으로 ,가 붙는다
numbers.join('/'); // 1/9/7/5/3/2
numbers.join(', '); // 1, 9, 7, 5, 3, 2


// sort
// compare 함수를 사용
// 반환 값 < 0 : a가 b보다 앞에 있어어야
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않음
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
// 리턴된 값으로 비교

arr.sort((a, b) => {
  return b - a;
});

numbers.sort((a, b)=>a > b ? 1 : -1);

console.log(numbers); // [ 1, 2, 3, 5, 7, 9 ]

//내림차순
numbers.sort((a, b) => b - a);

console.log(numbers); // [9, 7, 5, 3, 2, 1]


// find()
// 주어진 조건에 해당하는 첫 번째 요소의 값만 반환.
// 없으면 undefined를 반환
const find = people.find((item) => {
  return item.name === '이름';
});
// findIndex()
// 조건에 맞는 첫 번째 요소의 인덱스를 반환 
// 없으면 -1을 반환

```

## from

문자열, 유사 배열 객체를 배열로 만들어 주는 메서드

```js
// 1. 문자열을 배열로 만드는 예시
console.log(Array.from('Hello'));
// [ 'H', 'e', 'l', 'l', 'o' ]

// 2. 유사 배열 객체를 배열로 만드는 예시
console.log(Array.from({ 0: '사과', 1: '복숭아', 2: '바나나', length: 3 }));
// [ '사과', '복숭아', '바나나' ]

// 3. 함수의 매개변수들을 순서대로 배열로 만드는 예시
const funcA = (...arguments) => {
  return Array.from(arguments);
};

console.log(funcA(1, 2, 3, 4, 5));
// [ 1, 2, 3, 4, 5 ]
```
