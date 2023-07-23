## debounce

사용자의 입력이 없을때 일정 시간이 지나면 이벤트가 발생

```js
function debounce(callback, limit = 100) {
  let timeout;

  return function (...args) { //클로저 디바운스된 함수가 마지막으로 호출된 이후 일정 시간이 지나기 전에 다시 호출되지 않도록 제어하는 역할을 합니다.
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args); // limit시간이 지나면이 부분을 통해서 다시 this를 설정해서 콜백함수를 실행함
    }, limit);
  };
}
```

## throttle

```js
function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {// 쓰로틀된 함수가 이전 호출 이후 일정 시간이 지나기 전에 다시 호출되지 않도록 제어하는 역할을 합니다.
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
```

throttle 함수를 사용하여 생성된 함수는 호출될 때마다 waiting 변수를 체크하여 true일 경우에는 콜백 함수가 실행되지 않도록 합니다. 그러나 waiting 변수가 false인 경우에는 콜백 함수를 실행하고, 동시에 waiting 변수를 true로 설정하여 다음 일정 시간 동안에는 콜백 함수가 실행되지 않도록 합니다. 이후 setTimeout을 사용하여 일정 시간(limit) 이후에 waiting 변수를 다시 false로 설정하여, 다음 호출이 허용되도록 합니다.

이렇게 함으로써 쓰로틀된 함수가 일정 시간 동안에는 여러 번 호출되어도, 설정된 시간 간격만큼의 최소 시간 간격을 두고 콜백 함수를 실행하게 됩니다. 따라서 자주 발생하는 이벤트를 제어하여 성능을 개선하거나 불필요한 작업을 방지하는데 유용하게 사용할 수 있습니다.
