# Memoization

메모이제이션은 반복적으로 동일한 입력값을 함수가 호출할 경우에 사용

```js
const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];// 콜백함수가 없다면 cache에 저장된 값이 있는지 확인하고 키값을 반환 / 없다면 undefined
    if (cache[key]) {
      console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }
    cache[key] = callback(); // chache에 저장된 키값이 없다면 콜백함수를 실행하고 그 결과를 저장함
      };
})();
```

객체에 저장된 키값을 반환하는데 초기값이라면 저장하고 이미 저장된 동일한 키값이라면 저장된 값을 재사용

```js
memo('@tbody', () => getNode('.recordList tbody')); //setter

memo('@tbody') // getter
```