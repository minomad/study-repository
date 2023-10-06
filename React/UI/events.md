# 이벤트 핸들링

이벤트 핸들러에 전달되는 함수는 호출되는 것이 아니라 전달되어야 한다

```jsx
function Button() {
  const handleClick = () => console.log("클릭");

  return (
    <button type="button" onClick={handleClick}>
      클릭
    </button>
    <button type="button" onClick={() ⇒ alert(’….’)}>
      인라인방식
    </button>
 );
}
```

## 이벤트 핸들러 props 이름 지정

onSmash,onPlayMovie,onUploadImage

## 이벤트 전파

React 앱에서 onScroll을 제외한 모든 이벤트가 전파됩니다.

상위 요소에 연결된 이벤트가 있다면 하위 요소의 이벤트를 클릭시 버블링이 되어서 상위 요쇼의 이벤트핸들러도 실행됨

이벤트를 방지할러면 e.stopPropagation()를 호출

```jsx
function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {children}
    </button>
  );
}
```
