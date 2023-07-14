# rest parameter 나머지 매개변수

인자 값을 배열로 모아주는 역할로 매개변수에서 설정합니다.

## 
```js
//
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 출력: 6
console.log(sum(4, 5, 6, 7)); // 출력: 22

//
function average(...numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

console.log(average(2, 4, 6)); // 출력: 4
console.log(average(1, 3, 5, 7)); // 출력: 4

//
function logItems(...items) {
  items.forEach(item => console.log(item));
}

logItems('apple', 'banana', 'orange');
// 출력:
// apple
// banana
// orange

```