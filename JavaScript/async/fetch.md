# fetch

fetch는 네트워크에 데이터를 요청하고 받아서 사용하는 용도

promisee 객체가 포함되어 있기에 await 사용가능

서버의 값을 사용할려면 await로 할당하고 다시 재할당이 필요함

```js
let promisee = fetch(url, options);
```

method 기본값은 GET이고 POST,PUT,DELETE이 있음

options에 들어갈 내용들

```js
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
```

## fetch의 setter

```js
const pokemon = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};
```

## fetch의 getter

```js
const response = await fetch(url, restOptions);
```

#### response에 담기는 객체

![1](https://github.com/minomad/study-repository/assets/131448929/5d4fb165-3ac5-415d-b1c7-8cda1bb9146c)

#### return response는 response.data을 요청했기에 밑에 data 값이 할당됨

![2](https://github.com/minomad/study-repository/assets/131448929/a7f16849-a646-449e-b713-eccb8b77fbb7)

pokemon 함수를 호출하고 호출한 함수의 data값을 userData에 할당

만약 data의 name이 필요해서 name을 찾으면 response.data에 있는 name값을 출력

```js
const response = await pokemon({
  url: URL,
  method: 'GET',
});

const userData = response.data;

console.log(userData.name); // eevee
```
