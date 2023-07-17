# filter

`조건`을 만족하는 요소를 새로운 배열로 반환합니다.(리액트에서 많이 쓰임)

```js
let arr = arr.filter(function (item, index, array) {
  // 조건을 충족하는 요소는 results에 순차적으로 더하고
  // 조건을 충족하는 요소가 없으면 빈 배열을 반환
});
```

```js
const filter = people.filter((item) => {
  return item.id === 3;
});
```