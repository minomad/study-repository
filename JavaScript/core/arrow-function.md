# 화살표 함수

###

```js
const arrow = (a, b) => a + b;

console.log(add(1, 2));
```

### 인수가 없을떄

```js
const arrow = () => alert('green!');

arrow();
```

함수를 전달하게 되면 함수의 컨텍스트를 잃을 수 있는데 이때 화살표 함수를 사용하면 현재 컨텍스트를 잃지 않습니다.

- this / arguments를 지원하지 않습니다.
####
