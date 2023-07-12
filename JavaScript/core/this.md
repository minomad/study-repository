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

```js
function foo() {
  console.log(this);
}
const obj = {
  num: [1, 2, 3],
  foo,
};

obj.foo(); // this obj
```

객체의 메서드를 정의할 객체의 메서드를 `정의`할 때는 `일반 함수`를 사용하는 것이 좋습니다.

객체의 메서드 `안에서` 함수를 호출할 땐 `화살표 함수`가 더 좋습니다.

화살표함수는 부모(상위 컨텍스트)의 this를 가져옵니다.

```js
let user = {
  firstName: '보라',
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // 보라
```

이런 경우는 화살표 함수의 this는 window

```js
const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: '', text: '', link: '' },
  ],
  getItem(index) {
    return this.items[index];
  },
  addItem = (newItem) => {
    this.items.push(newItem); // 화살표함수의 this는 window
    console.log(this);
  },
};

```

## 결론
객체 안에서 메서드는 Concise 메서드를 사용하고 <br/>
메서드 안에서 함수는 화살표 함수를 사용하자

