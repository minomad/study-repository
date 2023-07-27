# localStorage

웹 브라우저에 데이터를 영구적으로 저장하는 데 사용되는 클라이언트 측 웹 스토리지입니다. 저장된 데이터는 브라우저를 종료하고 다시 열어도 유지되며, 다른 페이지 간에도 공유할 수 있습니다.

스토리지 객체는 네트워크 요청 시 서버로 전송되지 않습니다. 이런 특징 때문에 쿠키보다 더 많은 자료를 보관할 수 있습니다.

데이터는 모두 문자열 형식으로 저장되며, 객체나 배열과 같은 복잡한 데이터를 저장하려면 JSON.stringify()와 JSON.parse()를 사용하여 변환해야 합니다.

- setItem() - key, value 보관
- getItem() - value 값을 받아옴
- removeItem() - item 삭제
- clear() - 도메인 내의 localStorage 값 삭제
- length - 전체 item 갯수
- key() - index로 key값 찾기

## 데이터 저장

setItem
stringify

```js
// 데이터 객체 생성
const data = {
  name: 'js',
  age: 30,
  email: 'js@example.com',
};

// 객체를 문자열로 변환하여 localStorage에 저장
localStorage.setItem('user', JSON.stringify(data));
```

## 데이터 불러오기

getItem
parse

```js
// localStorage에서 데이터 불러오기
const savedData = localStorage.getItem('user');

// 문자열을 객체로 변환하여 사용
const user = JSON.parse(savedData);

console.log(user.name); // "js"
console.log(user.age); // 30
console.log(user.email); // "js@example.com"
```

## 데이터 제거

localStorage에서 특정 키의 데이터 제거

```js
localStorage.removeItem('user');
```

## 모든 데이터 제거

```js
localStorage.clear();
```
