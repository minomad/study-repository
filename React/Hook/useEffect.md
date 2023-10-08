# useEffect

useEffect는 렌더링이 화면에 반영된 이후(DOM커밋후) 코드를 실행시킵니다.

---

#### 한 번만 코드를 실행할때는 빈 배열

```jsx
useEffect(() => {
  // 함수 코드
  // 마운트됐을 때 실행
}, []);
```

#### 값이 없으면 리-렌더링 될 때마다 실행

```jsx
useEffect(() => {
  // 함수 코드
});
```

#### 컴포넌트의 props,state가 업데이트 될 때 실행

```jsx
useEffect(() => {
  // 함수 코드
}, state);
```

## 클린업

```jsx
useEffect(() => {
  function handleScroll() {
    console.log(globalThis.scrollX, globalThis.scrollY);
  }

  // 구독
  globalThis.addEventListener("scroll", handleScroll);

  // 구독 취소
  return () => globalThis.removeEventListener("scroll", handleScroll);
}, []);
```

애니메이션은 초기값으로 초기화

```jsx
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // 애니메이션 트리거

  return () => {
    node.style.opacity = 0; // 초깃값으로 초기화
  };
}, []);
```

데이터 패치는 중단하거나 무시

```jsx
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

## 반응성이 아닌 로직 추출 (useEffectEvent)

컴포넌트에서 props는 반응성이다

이벤트 핸들러는 수동적이지만

이펙트는 반응적이기에 반응성이 아닌 로직을 분리할 수 있다.

```jsx
function Page({ url }) {
  const { items } = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, numberOfItems);
  });

  useEffect(
    () => {
      onVisit(url); // 명시적으로 url전달
    },
    // ✅ 모든 종속성 선언됨
    [url]
  );

  // ...
}
```

이펙트의 한계

이펙트 내부에서만 호출할 수 있다

다른 컴포넌트나 훅에서 사용할 수 없다
