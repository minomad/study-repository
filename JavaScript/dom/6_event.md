# 이벤트

화살표함수로 add이벤트리스너를 사용할때 this를 생각해서

이벤트 핸들링에 여러가지 방법이 있지만 메서드로 node.`addEventListener(e)`를 사용  
addEventListener를 사용하면 상황에 따라 removeEventListener도 같이 추가

---

### 이벤트 메서드

click, mousemove, mouseover, mouseout, mousedown, mouseup 가 있음

```js
setTimeout(() => {
  first.removeEventListener('click', handleClick); // 나에게 걸려 있는 핸들러이기에 제거 이벤트는 함수를 호출해야한다.
  remove();
}, 3000);
```

---

### debounce

사용자의 입력이 없을때 일정 시간이 지나면 이벤트가 발생

```js
function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}
```

### throttle

```js
function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
```

## 버블링

버블버블 게임처럼 이벤트가 발생됨

li -> ul -> div 순서로 이벤트가 발생

```html
<div>
  3
  <ul>
    2
    <li>1</li>
  </ul>
</div>
```

## 타겟

e.currentTarget; - 이벤트를 발생시킨 대상 일반함수 this랑 같음  
e.target; - 마우스가 처음 만난 이벤트

## 이벤트 위임

부모에 이벤트를 등록해서 이벤트를 처리를 단순화하고 리소스를 절약하는 것


