# array-methods

배열에 올 수 있는 요소들 </br>
let arr = [10, 'abc', true, null, undefined, function(){}, {}];

### 기존 배열의 값을 변경하는 메서드

```js

  let pokemon = {
    '피카츄',
    '파이리',
    '꼬북이',
    '이상해씨',
  };

// push()
pokemon.push('브케인'); //마지막 인덱스에 추가

// pop()
마지막 값을 삭제

// shift()
첫번째 값을 삭제

// unshift()
첫번째에 값을 추가

// splice(0,3)
0~3번까지 삭제

```

### 기존 배열의 값을 변경하지 않고 새로운 배열을 만들어서 값을 반환하는 메서드

```js
// concat()
새로운 array를 만들어서 반환

// slice(0,3)
3번 인덱스 밑에까지만 삭제

// spread operator
값을 펼침
let pokemon2 = {
  ...pokemon
};
```

## 압도적으로 많이 사용하는 메서드

```js
// join()
string으로 변환하는데 기본값으로 ,가 붙는다
.join('/');
.join(', ');


// sort()
오름차순 정렬

let numbers = {
  1,
  9,
  7,
  5,
  3,
  2,
};
// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환

numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});

내림차순
numbers.sort((a, b) => a > b ? -1 : 1);


// map()



// filter()


// find()
해당하는 첫번째 값만 반환한다.

// findIndex()

```

## forEach

배열에서 루프가 필요할 때 사용

파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드

map 메서드와 비슷하지만 차이점은 return이 없다는 점

```js
array.forEach(function(currentValue, index, arr));
```

```js
let pokemon = ['피카츄', '파이리', '꼬북이'];

pokemon.forEach(myPoke);

function myPoke(item) {
  console.log(item); // 피카츄 파이리 꼬북이
}
```

```js
let pokemon = ['피카츄', '파이리', '꼬북이'];

pokemon.forEach(myPoke);

function myPoke(item, index, arr) {
  arr[index] = 'Hello ' + item;
}

console.log(pokemon); // [ 'Hello 피카츄', 'Hello 파이리', 'Hello 꼬북이' ]
```

## from

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

## reduce

배열의 값을 누적으로 연산하고 반환합니다.

```js
const arr = [1, 2, 3, 4, 5];

//acc = 누적 item = arr의 값이 순환
const sum = arr.reduce((acc, item) => acc + item, 0);

console.log(sum); // 15
```
