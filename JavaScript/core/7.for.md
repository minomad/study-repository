# for 반복문

```js
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
```

### for와 if

```js
for (let j = 2; j <= 10; ) {
  j++; //스텝
  if (j % 2 === 0) {
    // console.log(j);
  }
}
```

### for와 배열

```js
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

myArray = [1, 2, 3, 4, 5];

myArray.forEach((element) => {});
```

## for in

객체는 key값 배열은 index값

객체를 위한 반복문

객체 속성 이름을 통해서 반복

객체는 배열처럼 lenth 메서드가 없어 총 몇개가 있는지 알 수가 없기에 in문을 사용해서 확인

프로퍼티값도 출력한다

```js
const pokemon = {
  name: '피카츄',
  sound: '피카',
  age: 2,
};

for (key in pokemon) {
  console.log(`${key}: ${pokemon[key]}`);
}
```

hasOwnProperty 객체가 가지고 있는 키값만 출력하고 싶을 때

```js
for (key in book) {
  //객체명.hasOwnProperty(key값)
  if (book.hasOwnProperty(key)) {
    console.log(`key : ${key} / value : ${book[key]}`);
  }
}
```

객체 자신의 속성만 순환하려면

```js
for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}
```

## for of

배열를 위한 반복문

속성 값을 통해서 반복

배열의 value값을 가져온다

**iterable 자료형만 적용 가능**

```js
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}
```

## break

```js
let sum = 0;

while (true) {
  let value = +prompt('숫자', '');

  if (!value) break;

  sum += value;
}

alert('합계: ' + sum);
```

## continue

```js
for (let j = 0; j < 10; j++) {
  if (j % 2 == 0) continue;
}
```
