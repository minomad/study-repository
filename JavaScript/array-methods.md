# arry-methods

기존 배열의 값을 변경하는 메서드
```js

  let pokemon = {
    '피카츄',
    '파이리',
    '꼬북이',
    '이상해씨',
  };

// push() 
pokemon.push('추가'); //마지막 인덱스에 추가

// pop() 
마지막 값을 삭제

// shift()
첫번째 값을 삭제

// unshift()
첫번째에 값을 추가

// splice(0,3)
0~3번까지 삭제

```

---
기존 배열의 값을 변경하지 않고 새로운 배열을 만들어서 값을 반환하는 메서드
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

압도적으로 많이 사용하는 메서드

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
pokemon.map(((x)=> `포켓몬: ${x}`));
pokemon.map(((x)=>{
  if(x === '피카츄'){
    return `포켓몬: ${x}`;
  }else{
    return x;
  }
}));


// filter()
numbers = [1, 7, 4, 3, 6];

numbers.filter((x) => x % 2 === 0)

// find()
해당하는 첫번째 값만 반환한다.

// findIndex()

// reduce()
numbers.reduce((p, n) => p + n, 0)

```