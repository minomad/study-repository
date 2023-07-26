# async

`async`함수 `promise`객체가 포함되고 반드시 프라미스를 반환

```js
const func = async (url) => {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
  }

  return data;
};
```

## await


## try catch

async에서 에러를 잡을때 일반적으로 try catch를 사용함

<!-- ```js
const func = async (url) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();

      return data;
    }
  } catch (error) {
    console.error('에러:', error);
  }
};
``` -->
