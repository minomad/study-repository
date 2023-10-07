# 컴포넌트(component)

레고 블럭처럼 부품들을 조립해서 하나의 페이지를 만들어가는 리액트의 핵심이 컴포넌트

재사용 가능성이 중요

리액트의 컴포넌트(함수)는 항상 대문자로 시작

## 리액트의 기본구성

Button.jsx

```jsx
function Button() {
  return (
    <button type="button" className={buttonStyle}>
      {children}
    </button>
  );
}

// 버튼 컴포넌트 내보내기
export default Button;
```

App.jsx

```jsx
import Button from './components/Button'; //버튼 컴포넌트 가져오기
import './App.css';

function App() {
  return (
    <div">
      <Button>로그인</Button>
      <Button>회원가입</Button>
      <Button>Disabled</Button>
    </div>
  );
}

export default App;
```

main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>mission-01</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

`컴포넌트`는 주어진 일만 처리 화면 업데는 state를 설정

동일 입력, 동일 출력 -> 동일한 값 반환

랜더링은 언제든 발생 할 수 있기에 컴포넌트는 서로의 랜더링 순서에 의존해서는 안됨

## 상태는 UI 트리 위치에 연결

동일 위치의 동일 컴포넌트는 상태를 유지 / 다른 컴포넌트는 상태 초기화

동일 위치 상태 재설정하는 방법

1. 다른 위치에서 컴포넌트 렌더링
2. key를 사용해 각 컴포넌트에 고유한 값을 설정
