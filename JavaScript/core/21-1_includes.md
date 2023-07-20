# includes

## 배열

주어진 요소가 배열안에 존재하면 true 없으면 false를 반환

```js
const arr = [1, 3, 6, 9];

console.log(arr.includes(3)); // true
console.log(arr.includes(7)); // false
```

## 문자열
```js

const string = "Hello, World!";

console.log(string.includes("Hello")); // true
console.log(string.includes("hello")); // false

```
##cap
```js
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const str = "hello world";
const cap = capitalizeFirstLetter(str);
console.log(cap); // "Hello world"

```