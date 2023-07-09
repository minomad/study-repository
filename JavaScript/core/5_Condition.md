# 조건문

## if문

특정 조건이 만족할 때 코드가 실행되도록 합니다.

```js
const a = 10;

if (a === 5) {
  console.log('5입니다!');
} else if (a === 10) {
  console.log('10입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}
```

#### 함수에 if문

```js
function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}
```

## switch문

조건이 3~4개 이상일때 사용

```js
const pokemon = '피카츄'

let gen;

switch (pokemon) {
	case '피카츄':
    gen ='1세대';
		break;
	case '파이리':
    gen ='1세대';
		break;
  case '꼬북이':
    gen ='1세대';
		break;
  case '이상해씨':
    gen ='1세대';
		break;
  case '브케인':
  case '치코리타':
    gne ='2세대';
	default;
    gen ='3~9세대'
		break;
}
```

if문은 조건들을 다 확인하지만 switch문은 이름표를 보고 확인합니다.

## 삼항 연산자

조건부 랜더링에서 사용

```js
let result = 조건 ? true : false;
```

```js
const array = [];
let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';
```
