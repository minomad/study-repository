# forEach

배열에서 루프가 필요할 때 사용

파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드

map 메서드와 비슷하지만 차이점은 return이 없다는 점

```js
array.forEach(function(currentValue, index, arr));
```

```js
let pokemon = ['피카츄', '파이리', '꼬북이'];

pokemon.forEach(myPoke);

function myPoke(item) {
  console.log(item); // 피카츄 파이리 꼬북이
}
```

```js
let pokemon = ['피카츄', '파이리', '꼬북이'];

pokemon.forEach(myPoke);

function myPoke(item, index, arr) {
  arr[index] = 'Hello ' + item;
}

console.log(pokemon); // [ 'Hello 피카츄', 'Hello 파이리', 'Hello 꼬북이' ]
```
