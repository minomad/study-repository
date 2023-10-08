# useRef

타이머 해제 / DOM 조작

```jsx
import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button type="button" onClick={handleClick}>
        텍스트 입력 필드에 초점 이동
      </button>
    </>
  );
}
```

## ref 콜백

```jsx
import { useRef } from "react";

const catList = [];

for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `https://placekitten.com/250/200?image=${i}`,
  });
}

export default function CatFriends() {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // 첫 사용 시, 맵 초기화
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button type="button" onClick={() => scrollToId(0)}>
          톰
        </button>
        <button type="button" onClick={() => scrollToId(5)}>
          마루
        </button>
        <button type="button" onClick={() => scrollToId(9)}>
          젤리로럼
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img src={cat.imageUrl} alt={`고양이 #${cat.id}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
```

## forwardRef

ref를 props로 전달할 경우

useImperativeHandle로 요구한 작동만 가능하도록 제한

```jsx
import { useRef, forwardRef, useImperativeHandle } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    // 초점 이외의 것은 노출하지 않습니다.
    focus() {
      realInputRef.current.focus();
    },
  }));

  return <input type="text" ref={realInputRef} {...props} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button type="button" onClick={handleClick}>
        텍스트 입력 필드에 초점 이동
      </button>
    </>
  );
}
```
