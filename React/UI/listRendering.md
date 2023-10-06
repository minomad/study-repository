# 리스트 렌더링

리액트에서 배열이나 리스트를 반환할때는 map이나 filter 메서드를 자주 사용

```jsx
function List() {
  const listItems = list.map((item) => <li>{item}</li>);
  return <ul>{listItems}</ul>;
}
```

map을 변수에 담아서 반환할 수 있다

```jsx
{
  statusMessage.map((message) => <li key={message}>{message}</li>);
}
```

filter

```jsx
function List() {
  const filterList = list.filter((item) => item.name.includes('name'));
  const listItems = filterList.map((item) => <li>{item.name}</li>);

  return <ul>{listItems}</ul>;
}
```

### 역순

```jsx
// reverse
{
  statusMessage.map((message) => <li key={message}>{message}</li>).reverse();
}

// slice
{
  statusMessage
    .slice()
    .reverse()
    .map((message) => <li key={message}>{message}</li>);
}

// toReversed
{
  statusMessage.toReversed().map((message) => <li key={message}>{message}</li>);
}

// spread
{
  [...statusMessage]
    .reverse()
    .map((message) => <li key={message}>{message}</li>);
}
```

### props 전달된 함수

```jsx
// DefinitionList.jsx
function DefinitionList() {
  const renderList = ({ reverse = false } = {}) => {
    const renderListItem = (message) => <li key={message}>{message}</li>;
    return (!reverse ? statusMessage : statusMessage.toReversed()).map(
      renderListItem
    );
  };
}
//reverse가 false면 순차 / reverse가 true면 역순

// RenderingLists.jsx
<ul className="renderList">{renderList({ reverse: true })}</ul>;
```

### React 라이브러리 객체의 키,값을 설명 목록으로 렌더링

```jsx
// RenderingLists.jsx

<dl className="reactLibrary">
  <pre>{JSON.stringify(reactLibrary, null, 6)}</pre>
</dl>;

{
  JSON.stringify(Object.entries(reactLibrary), null, 2);
} // 객체
```

```jsx
{
  Object.entries(reactLibrary).map(([key, value]) => {
    return (
      <div key={key}>
        {" "}
        {/* UI상 dt를 div로 묶어야함 */}
        <dt>{key}</dt>
        <dt>{value}</dt>
      </div>
    );
  });
}

// 리스트렌더링에 key값의 중요성
// 만약에 리스트가 356개에서 357개로 추가 되었다면? 고유한 id값이 있어야 찾기가 쉽고
// 고유의 id가 있으면 트리구조에서 빠르게 비교하고 넘어가서 성능적으로도 빠름
```
