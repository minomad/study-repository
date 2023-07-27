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

부모함수에 이벤트를 등록해서 이벤트 처리를 단순화하고 리소스를 절약할 수 있음

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
