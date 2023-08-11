# 조건부 렌더링

조건에 따라 다른 컴포넌트를 렌더링할때

## 조건문

값을 반환하지 않음

```jsx
// imageType값에 따라 조건적으로 처리
let imageType = 'vite';

let imageComponent;
if (imageType === 'vite') {
  imageComponent = <img src={viteImagePath} alt="비트" />;
} else {
  imageComponent = <img src={reactImagePath} alt="리액트" />;
}
```

변수에 조건문을 담을 수 없고 조건식만 담을 수 있음
조건문을 사요하는 경우는 비동기통신때 사용

```jsx

```

## 조건식

값을 반환할 때는 조건식을 사용하고 jsx(return)안에서는 조건식만 사용 가능

```jsx
{
  imageType.includes('vite') ? <img src={viteImagePath} alt="비트" /> : <img src={reactImagePath} alt="리액트" />;
}

// 마크업 속성에 데이터 바인딩해서 조건식을 사용할 수 있음
<img src={imageType === 'react' ? '/react.avif' : '/vite.svg'} alt={imageType === 'react' ? '리액트' : '비트'} />;
```

그외 T||, F&& 논리연산자 ??null병합연산자를 사용

<!-- - React의 조건 제어는 JavaScript 구문을 활용합니다.
- if문을 사용해 JSX 트리를 조건부로 반환할 수 있습니다.
- 삼항 연산자 식을 사용해 JSX 구문 내부에서 조건 처리할 수 있습니다.
- 논리 연산자 &&를 사용해 JSX 또는 아무 것도 아닌 값을 반환할 수 있습니다.
- 변수와 조건문을 사용한 방법은 다소 장황하지만, 유연하여 유용할 수 있습니다. -->
