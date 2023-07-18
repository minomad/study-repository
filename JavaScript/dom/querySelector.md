## querySelector

`querySelector`: CSS 선택자에 해당하는 첫 번째 요소를 반환합니다.

```js
// class
const style = document.querySelector('.class');

// id
const uid = document.querySelector('#id');

// 자손 선택
// 부모 클래스를 가진 첫 번째 자식 클래스를 선택
const child = document.querySelector('.parent-class .child-class');

// 첫 번째 div 선택
const element = document.querySelector('div');

// 가상 클래스 선택
const pseudo = document.querySelector('a:hover');
```

```js
//이벤트 핸들러
const button = document.querySelector('#myButton');
button.addEventListener('click', handleClick);
```

## querySelectorAll

- `querySelectorAll`: CSS 선택자에 해당하는 모든 요소를 반환합니다.

```js
// class 모두 선택
// 자식 모두 선택

// 여러 선택자 조합
const elements = document.querySelectorAll('div.my-class[data-id="123"]');
```

#### `closest`: 가장 가까운 상위(조상) 요소를 탐색하는데 자주 사용됩니다.

```js
const child = document.querySelector('.child');
const parent = child.closest('.parent');
console.log(parent); // <div class="parent">
```
