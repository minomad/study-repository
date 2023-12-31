# useState

state는 컴포넌트의 메모리와 같다

상위 컴포넌트는 일부 정보를 state로 유지하고 이를 props로 하위 컴포넌트에 전달하는 경우도 있음

```jsx
const [상태변수, 상태업데이트함수] = useState(초기값);
```

```jsx
const [state, setState] = useState(() => {
  //초기화 함수를 넘길수도 있다
  return;
});
```

useState 훅을 사용할 때 생성된 상태 변수는 렌더링될 때마다 초기값을 가진다

함수형 컴포넌트가 렌더링될 때마다 상태 변수를 다시 생성하기 때문

상태업데이트함수는 이전 상태 변수의 값을 저장하고 있다가

상태를 업데이트할 때 이전 상태 값으로 새로운 값을 계산 수정한다

함수내 지역변수는 렌더링 간에 값을 기억하지 않는다(다시 렌더링하면 다시 초기화)

지역 변수를 변경해도 렌더링되지 않는다.

그래서 useState 훅을 사용 훅은 상태 변수와 상태 업데이트 함수를 제공

const [index, setIndex] = useState(0)

상태변수는 스냅샷처럼 작동함

이미 가지고 있는 상태를 바로 변경되지 않음

`컴포넌트가  리-랜더링될때 상태변수의 값이 변경됨`

```jsx
const [view, setView] = useState(false);

const page = view ? <Cart /> : <List />;

const content = <>{page}</>;

return content;
```
