# 모듈

sass처럼 각 폴더에 index.js에 다 받아서 lib폴더(상위)에 있는 index.js가 다 받아서 main.js에 import한다

rename as 별칭 사용가능

모듈을 사용하면 `use strict`로 실행이 됩니다.

```html
<script type="module" src="main.js"></script>
```

## export

내보내기

```js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

export function sayBye(user) {
  alert(`Bye, ${user}!`);
}
```

```js
export { sayHi, sayBye };

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}
```
re-export


## import

불러오기

```js
import { getNode, attr } from './lib';
```

## 스코프

모듈은 자신만의 스코프가 있습니다.

모듈 내부에서 정의한 변수나 함수에 다른 스크립트가 접근 할 수 없습니다.

---

동일한 모듈이 여러 곳에서 사용되더라도 최초 호출시 단 한번만 실행해서 필요한 모든 곳에 결과 값을 반환함

모듈의 최상위 this는 `undefined`

defer 속성이 기본값이기에

모듈을 사요할 땐 HTML 페이지가 완전히 나타난 이후에 모듈이 실행된다는 점
