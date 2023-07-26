# try...catch

오류 상황에 대응하고, 정보를 수집하며, 리소스를 안전하게 정리하고, 대안 실행 경로를 설정하는 등의 작업을 수행할 때 사용합니다.

비동기

```js
function run() {
  try {
    // 예외가 발생할 수 있는 코드
  } catch (error) {
    // 예외 처리 코드
  } finally {
    // 항상 실행되는 코드
  }
}
run();
```

```js
function 정보가져오기() {
  setTimeout(() => {
    try {
      throw new Error('인터넷이 통신이 원활하지 않습니다');
      // console.log('유저 정보 가져옴~');
    } catch (err) {
      console.log('유저 정보 가져오기 에러! : ' + e.message); //유저 정보 가져오기 에러! : 인터넷이 통신이 원활하지 않습니다
      document.body.insertAdjacentHTML('beforeend', e.message); //인터넷이 통신이 원활하지 않습니다
    }
  }, 2000); //초기 로딩 시 필요한 데이터 중 가장 중요하거나 빠르게 로드되어야 할 데이터만 먼저 가져오고, 나머지는 비동기적으로 로드하는 방식을 사용합니다. 이를 통해 초기 로딩 시간을 최소화하고, 사용자에게 빠르게 반응하는 웹 페이지를 제공할 수 있습니다.
}

h1.addEventListener('click', 정보가져오기);
```
