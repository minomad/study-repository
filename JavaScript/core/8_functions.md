# function 함수

일련된 공통의 작업을 처리하기 위해서 연관된 코드들을 모아 놓은 자료 (코드 묶음)

1. 자바스크립트는 함수를 값처럼 인식합니다.
2. 함수는 `동작 하나`만 담당해야 합니다.
3. 함수에서 입력받는 값에 대한 정의를 `파라미터`라고 한고
   실제 입력하는 값은 `아규먼트`라고 합니다.
4. 매개변수에 인수를 전달하지 않으면 기본 값 `undefined`
5. `지역변수`는 함수 안에서만 접근할 수 있고
   `외부변수`를 함수 내부에서도 접근해서 수정도 할 수 있스ㅜㅂ니다.
6. 함수를 실행하는 것을 함수를 호출한다고 표현
7. `일급함수` - 변수가 사용되는 모든 곳에 함수가 사용될 수 있는 경우
8. 객체에서 사용되는 함수를 `메서드`

## 함수 선언식

```js
function 함수명 (매개변수 x, y){
	let temp = x + y // 매개변수를 어떻게 할지
	return temp
}

함수명(인수 1,2); //함수명으로 호출 결과값 3
```

## 함수 표현식

```js
const 변수명 = function 함수명() {}; //표현식은 ; 표기한다. 변수의 이름으로 호출한다
```

함수명 없으면 익명 표현식

`함수의 입출력 값이 없을 수 있다.`

```js
function Arr(arr) {
  console.log(arr[0]);
}
Arr(["banana", 2000]);

function Obj(obj) {
  console.log(obj.name);
}
Obj({ name: "apple", price: 2000 });
```

내부함수

```js
function outer(x) {
  return function inner() {
    return x * x;
  };
}

const innerF = outer(10);
const result = innerF();
```

## 함수 네이밍

함수는 동작을 수행하기 위한 코드이기에 이름을 동사로 네이밍

간결하고 명확하게 어떤 동작을 하는지 설명

- `"get…"` – 값을 반환함
- `"calc…"` – 계산
- `"create…"` – 생성
- `"check…"` – 확인하고 불린값을 반환함

```js
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

const solution = (numbers) => numbers.map((number) => number * 2);
```

## return

함수는 return이 없으면 undefind 만 출력

함수를 호출한 부분으로 데이터를 전달해주기 위해서 사용

```js
function sum(num1, num2) {
  return num1 + num2;
  console.log(); // return 즉시 중단되서 이 문단은 실행되지 않는다.
}
const result = sum(10, 20); //리턴의 데이터 전달받음 (반환)
```

```js
function counter() {
  for (var count = 1; ; count++) {
    // 무한 반복
    console.log(count + "A"); // 5까지
    if (count === 5) {
      return;
    }
    console.log(count + "B"); // 4까지
  }
  console.log(count + "C"); // 절대 나타나지 않음
}

counter();
```

```js
function sum(num1, num2) {
  return num1 + num2;
}
const result = sum(10, 20); // 30반환
const result_2 = sum(20, 30); // 50 반환

const sum_result = result + result_2; //30 + 50
console.log(sum_result); // 80
```

## 콜백함수

함수안에서 다른 함수를 실행

## 매개변수 기본값을 설정할 수 있는 또 다른 방법

```js
function showMessage(text) {
  if (text === undefined) {
    // 매개변수가 생략되었다면
    text = "빈 문자열";
  }

  alert(text);
}

showMessage(); // 빈 문자열
```

```js
// 매개변수가 생략되었거나 빈 문자열("")이 넘어오면 변수에 '빈 문자열'이 할당됩니다.
function showMessage(text) {
  text = text || '빈 문자열';
  ...
}
```

```js
// 매개변수 'count'가 `undefined` 또는 `null`이면 'unknown'을 출력해주는 함수
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```
