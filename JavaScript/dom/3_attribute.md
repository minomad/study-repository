# 속성과 프로퍼티

## HTML 속성

```js
const first = getNode('.first');

console.dir(first); //@ 객체가 출력됨
console.log(first.className); //@ <-프로퍼티
```

## DOM 프로퍼티

- `.hasAttribute(name)`: 요소가 지정한 name의 속성을 가지고 있는지 여부를 확인합니다. 속성이 존재하면 true를 반환하고, 속성이 없으면 false를 반환합니다.

- `.getAttribute(name)`: 요소의 지정한 name의 속성값을 가져와서 반환합니다. 속성이 없는 경우 null을 반환합니다.

- `.setAttribute(name, value)`: 요소의 지정한 name의 속성값을 변경합니다. 속성이 이미 존재하는 경우 값을 업데이트하고, 속성이 없는 경우 새로운 속성을 추가합니다.

- `.removeAttribute(name):` 요소의 지정한 name의 속성을 제거합니다. 요소가 속성을 가지고 있지 않아도 오류가 발생하지 않습니다.

- `.attributes`: 요소의 속성을 나타내는 NamedNodeMap(이름이 지정된 노드 맵)을 반환합니다. 열거 가능한(iterable) 속성 집합으로, for...of 루프 또는 Array.from() 메서드를 사용하여 속성에 접근할 수 있습니다.

## 사용자 속성

- `.dataset` : 사용자 정의 데이터 속성을 객체 형태로 저장합니다

```js
// 데이터를 set get할 수 있음
console.log(first.dataset);
console.log(first.dataset.size);
console.log((first.dataset.animation = 'paused'));
```
