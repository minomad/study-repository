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
const fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('사과');
    break;
  case 'banana':
    console.log('바나나');
    break;
  case 'orange':
    console.log('오렌지');
    break;
  default:
    console.log('과일이 아님');
}
```

if문은 조건들을 다 확인하지만 switch문은 이름표를 보고 확인
