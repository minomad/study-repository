# forEach

배열에서 루프가 필요할 때 사용합니다.

파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드

map 메서드와 비슷하지만 차이점은 반환값이 없다는 점

```js
array.forEach(function(currentValue, index, arr));
```

```js
let arr = ['사과', '복숭아', '바나나'];

arr.forEach(fruit);

function fruit(item) {
  console.log(item); // 사과 복숭아 바나나
}
```

```js
let arr = ['사과', '복숭아', '바나나'];

arr.forEach(fruit);

function fruit(item, index, arr) {
  arr[index] = '맛있는 ' + item;
}

console.log(arr); // [ '맛있는 사과', '맛있는 복숭아', '맛있는 바나나' ]
```
