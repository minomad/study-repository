# 옵셔널 체이닝 ?.

객체 체인 안에서 프로퍼티 또는 메서드에 접근할 때 해당 프로퍼티 또는 메서드가 존재하지 않는 경우 에러가 발생하는 것을 방지

?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.

객체/배열/메서드 ?.

```js
const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zipcode: '10001',
  },
};

const city = user.address?.city; // 정상적으로 'New York' 반환
const country = user.address?.country; //에러 없이 undefined 반환
```

```js
const arr = [1, 2, 3];

const first = arr?.[0]; // 정상적으로 1 반환
const fourth= arr?.[3]; // 배열의 길이보다 큰 인덱스이므로 undefined 반환

```

```js
const obj = {
  greet: function (name) {
    return `Hello, ${name}!`;
  }
};

const result1 = obj.greet?.('John'); // 정상적으로 'Hello, John!' 반환
const result2 = obj.greet?.(); // obj.greet가 함수이므로 정상적으로 undefined 반환
const result3 = obj.sayHello?.('Alice'); // obj.sayHello가 없으므로 undefined 반환

```
