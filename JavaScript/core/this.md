# this

나를 호출한 대상을 불러올 때 사용합니다.<br/>
ex) button이 4개 있다면 어떤 버튼을 눌렀는지 확인할 때 `this`를 사용합니다.

this는 `어떻게` 호출되었느냐에 따라 결정됩니다.

## 전역에서 this

전역에서 this는 window

```js
console.log(this); // window
```

## 일반 함수에서 this

일반 함수의 this는 window

```js
function num() {
  console.log(this);
}
num(); //window
```


## 객체에서 this

객체의 method로 호출될 때 this는 해당 객체를 가리킵니다.

객체의 메서드를 정의할 객체의 메서드를 `정의`할 때는 `일반 함수`를 사용하는 것이 좋습니다.

객체의 메서드 `안에서` 함수를 호출할 땐 `화살표 함수`가 더 좋습니다.

화살표함수는 부모(상위 컨텍스트)의 this를 가져온다.
```js

```