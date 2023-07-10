# reduce

배열의 값을 누적으로 연산하고 반환합니다.

```js
const arr = [1, 2, 3, 4, 5];

//acc = 누적 item = arr의 값이 순환
const sum = arr.reduce((acc, item) => acc + item, 0);

console.log(sum);// 15
```
