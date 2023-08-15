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
