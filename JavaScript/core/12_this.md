# this

나를 호출한 대상을 불러올 때 사용합니다.   
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

객체의 메서드를 `정의`할 때는 `일반 함수`를 사용하는 것이 좋습니다.

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

## call,apply,bind

`call`, `apply`,`bind`는 자바스크립트에서 함수를 호출하고 함수의 `this` 값을 설정하는 방법을 제어하기 위해 사용되는 메서드들입니다.

일반함수에서 this는 호출한 대상이 되고 자신을 호출하면 window가 되는데 메서드를 사용하면 누가 호출하든 내가 this 값을 설정할 수 있습니다.

### `call`

함수 호출 메서드로 함수 내부에서 this의 값을 첫 번쨰 인자로 전달한 `객체`로 설정할 수있다

```js
const person1 = {
  name: 'John',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const person2 = {
  name: 'Alice',
};

person1.sayHello(); // Hello, John!
person1.sayHello.call(person2); // Hello, Alice
```

### `apply`

call과 유사하지만 인수를 배열로 받는다

```js
function add(a, b) {
  return a + b;
}
const numbers = [10, 5];
const result = add.apply(null, numbers);
console.log(result); // 15
```

### `bind`

새로운 함수를 생성하여 원본 함수의 this값을 설정

```js
function sayHello() {
  console.log(`Hello, ${this.name}!`);
}

const person1 = { name: 'John' };
const person2 = { name: 'Alice' };

const sayHelloJohn = sayHello.bind(person1);
const sayHelloAlice = sayHello.bind(person2);

sayHelloJohn(); // Hello, John!
sayHelloAlice(); // Hello, Alice!
```

## 결론

객체 안에서 메서드는 Concise 메서드를 사용하고   
메서드 안에서 함수는 화살표 함수를 사용하자
