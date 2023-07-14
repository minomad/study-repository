# arguments 유사 배열 객체

함수에 전달된 인수들을 포함하는 유사배열 객체</br>
인수들을 동적을 처리 할 수 있습니다.

arguments`.length`: arguments 객체에 포함된 인수의 개수를 반환합니다.

arguments`[index]`: arguments 객체의 특정 인덱스에 위치한 인수 값을 반환합니다. index는 0부터 시작합니다.

객체라서 배열의 메서드를 사용하려면`Array.from`메서드를 사용하거나 `전개연산자(...)`를 사용해서 배열로 전환해야합니다.

```js
// from
function arrayObj() {
  let argsArray = Array.from(arguments);
  console.log(argsArray);
}

arrayObj(1, 2, 3);

// 전개 연산자
function argsObj() {
  let argsArray = [...arguments];
  console.log(argsArray);
}

argsObj(1, 2, 3);
```
