# xhr

요즘은 fetch를 많이 사용하지만 공공기간에서는 사용되는 내용

JSON.stringify 문자화 => 서버 => JSON.parse 데이터화 => 유저  
headers (cors)


open/send/event가 기본 template

```js
const xhr = ({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application.json', // 본문 데이터가 JSON형식임을 요청
    'Access-Control-Allow-Origin': '*', // CORS * 모든 도메인의 요청을 허용
  },
} = {}) => {
  // 처음부터 파라미터에 객체구조분해할당 하고 없다면 기본값 {}빈객체를 받음

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  //headers 서버에 요청을 보낼 때 추가 정보
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  // 위 서버의 정보를 받아서 실행
  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        onSuccess(JSON.parse(response)); // response는 readystatechange이 서버에서 가져온 값을 받음
        console.log('통과');
      }
    } else {
      onFail('실패');
    }
  });

  xhr.send(JSON.stringify(body)); //문자로 변환해서 서버로 전송
};
```

---

`readyState`  
0: uninitialized  
1: loading  
2: loaded  
3: interactive  
4: complete

---

#### onSuccess콜백함수로 response를 호출 바디를 나중에 호출한 형태

```js
xhr({
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess(result) {
    console.log(result);
  },
  onFail(err) {
    console.log(err);
  },
  body: {
    name: 'tiger',
  },
});
```

#### 사용자 편리를 위해서 설계자가 함수 안에 메서드를 넣어 버림(조각화)

```js
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};
```

## 교차출처리소스공유CORS

웹 브라우저는 프로토콜, 도메인, 포트가 모두 동일한 경우에 리소스에 접근할 수 있는데 이것을 CORS를 통해서 출처가 다른 자원들을 공유할 수 있습니다.