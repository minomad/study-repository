# patch

```js
async function getData() {
  try {
    const response = await tiger.get(URL);
    if (response.ok) {
      const data = response.data[0];
      return data;
    } else {
      throw new Error('API 요청 실패했습니다');
    }
  } catch (err) {
    console.error('에러', err);
  }
}


async function postData() {

  const value = reviewTextField.value; // textarea의 value
 
  try {
    const data = await getData();
    const vitiedData = data.visited[0];
    vitiedData.review = value;

    const uniqueId = await loadStorage('uniqueId') // uniqueId가 일치하면 작성가능

    const response = await tiger.patch(`${URL}/${uniqueId}`, data);
    if (response.ok) {
      window.location.href = './visitRecord.html';
    }
  } catch (err) {
    console.error(err);
  }
}


```