# 문서 수정하기

- `createElement` 새로운 HTML 요소를 생성

```js
const element = document.createElement(tagName);
```

- `.insertAdjacentHTML(position, value)`: 특정 위치에 HTML을 삽입합니다. position은 삽입할 위치를 지정하는 문자열이며, value는 삽입할 HTML 코드입니다.

- `.insertAdjacentElement(position, element)`: 특정 위치에 요소를 삽입합니다. position은 삽입할 위치를 지정하는 문자열입니다. element는 삽입할 요소를 나타내는 DOM 노드 객체입니다.

- `.insertAdjacentText(position, text)`: 특정 위치에 텍스트를 삽입합니다.

---

- `forebegin`: 시작 태그 앞에 HTML을 삽입합니다.
- `afterbegin`: 태그안에 첫 번째 자식 요소 앞에 HTML을 삽입합니다.
- `beforeend`: 마지막 자식 요소 뒤에 HTML을 삽입합니다.
- `afterend`: 종료 태그 뒤에 HTML을 삽입합니다.
