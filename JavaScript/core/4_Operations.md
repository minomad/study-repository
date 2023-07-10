# 연산자

## 산술 연산자

```js
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10); // 나눗셈
console.log(10 % 3); // 나머지

// 거듭 제곱
let power = 2 ** 53 - 1;
let power = Math.pow(2, 53) - 1;
```

## 증가와 감소

```js
let number = 1;

number++;
console.log(number);

number--;
console.log(number);
```

## 논리 연산자

- &&를 사용했을때 좌측이 true면 우측 값 반환
- &&를 사용했을때 좌측이 false면 좌측 값 반환
- ||를 사용했을때 좌측이 true면 좌측 값 반환
- ||를 사용했을때 좌측이 false면 우측 값 반환

### || (or)

`T||` 첫 번째 `true` 찾습니다.

```js
let firstName = '';
let lastName = '';
let nickName = '1';

alert(firstName || lastName || nickName || '익명'); // 1

// 모든 변수가 falsy이면 "익명"이 출력
// true에서 멈춘다.
// 반환 값이 형 병환을 하지 않은 원래의 값
```

### && (and)

`F&&` 첫 번째 `false` 찾습니다.

```js
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert('현재 시각은 12시 30분입니다.');
}
```

## ! (NOT)

```js
alert(!true); // false
alert(!0); // true
```

NOT을 두 개 연달아 사용`(!!)`하면 값을 불린형으로 변환

## nullish 병합 연산자 '??'

??는 첫 번째 정의된(defined) 값을 반환합니다.<br/>
좌측값이 null or undefind 일때 우측값을 출력하고 그 값을 할당한다.<br/>
nullish 병합 연산자 `??`를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있습니다.<br/>
`??`는 변수에 기본값을 할당하는 용도로 사용할 수 있습니다.

```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

`null`이나 `undefined` = true

let name;
console.log(name);

name = name ?? 'nickname';
console.log(name);

name = name ?? 'user';
console.log(name);

let name2;
name2 ??= 'nickname';
console.log(name2);
```
