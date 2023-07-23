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
    //클로저  이 변수는 디바운스된 함수가 마지막으로 호출된 이후 일정 시간이 지나기 전에 다시 호출되지 않도록 제어하는 역할을 합니다.
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args); // limit시간이 지나면이 부분을 통해서 다시 this를 설정해서 콜백함수를 실행함
    }, limit);
  };
}
```

### throttle

```js
function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    //이 변수는 쓰로틀된 함수가 이전 호출 이후 일정 시간이 지나기 전에 다시 호출되지 않도록 제어하는 역할을 합니다.
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

throttle 함수를 사용하여 생성된 함수는 호출될 때마다 waiting 변수를 체크하여 true일 경우에는 콜백 함수가 실행되지 않도록 합니다. 그러나 waiting 변수가 false인 경우에는 콜백 함수를 실행하고, 동시에 waiting 변수를 true로 설정하여 다음 일정 시간 동안에는 콜백 함수가 실행되지 않도록 합니다. 이후 setTimeout을 사용하여 일정 시간(limit) 이후에 waiting 변수를 다시 false로 설정하여, 다음 호출이 허용되도록 합니다.

이렇게 함으로써 쓰로틀된 함수가 일정 시간 동안에는 여러 번 호출되어도, 설정된 시간 간격만큼의 최소 시간 간격을 두고 콜백 함수를 실행하게 됩니다. 따라서 자주 발생하는 이벤트를 제어하여 성능을 개선하거나 불필요한 작업을 방지하는데 유용하게 사용할 수 있습니다.

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

## bindEvent()

```js
// 이벤트를 생성하는 유틸 함수

function bindEvent(타겟, 타입, 콜백) {
  타겟.addEventListener(타입, 콜백);

  return () => {
    //인수가 ()일때 반환
    타겟.removeEventListener(타입, 콜백); //클로저 bindEvent의 타입과 콜백을 참조할 수 있고 변수에 할당해서 호출하면 인베트 제거 할 수 있음
  };
}
function 클릭함수() {
  // 클릭 이벤트가 발생했을 때 실행될 함수
}

// remove라는걸 명시하기 위해서 변수에 할당
const removeClickEvent = bindEvent(h1, 'click', 클릭함수);
//removeClickEvent()
```
