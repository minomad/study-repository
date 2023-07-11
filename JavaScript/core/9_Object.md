# 객체

키와 값들을 그룹으로 묶음

객체는 `key: value`의 형태로 `중괄호{}`안에 정의하는데 이를 `속성(properites)`라고 합니다.

속성의 키는 데이터에 접근하기 위한 `식별자`로서의 역할을 한다.

식별자(변수)네이밍 규칙

객체의 프로퍼티 값으로 함수도 사용이 가능하다

```js
let pikachu = {
  name: '피카츄',
  group: '포켓몬',
  skill: function () {
    return `${this.name} 백만볼트`;
  },
};
```

## const로 선언한 객체의 특징

const 객체 자체를 변경할수는 없지만 객체 안의 프로퍼티나 메서드는 변경할 수 있습니다.

```js
const nameKey = 'name';
const nameValue = '피카츄';

const groupKey = 'group';
const groupvalue = '포켓몬';

const picachu = {
  [nameKey]: nameValue,
  [groupKey]: groupvalue,
  skill: function () {
    return `${this.name} 백만볼트`;
  },
};
picachu['group'] = '1세대 포켓몬';
picachu['eng'] = 'picachu';
```

## 객체에 접근

```js
const obj = { a: 'hi', b: 0, c: 0 };
console.log(obj['a']); // 'hey"
console.log(obj.a); // "hey"

// 객체의 속성 변경하기
obj.b += 1;
obj['c'] -= 1;

// 객체의 속성 삭제하기
delete obj.a;
// 제거(remove)는 비우는것(null)
// 삭제(delete)는 없앰
```

#### 모든 키값

```js
Object.keys(picachu);
```

#### 모든 벨류값

```js
Object.values(picachu);
```

### 프로퍼티 나열

```js
Object.keys(); // 키 나열
Object.values(); // 값 나열
Object.entries(); // 키와 값을 나열
```

## 계산된 프로퍼티

Computed Property Name `[]`로 키값을 변수로 처리

```js
let key = 'name';
let obj = {
  [key]: 'kkm',
};
console.log();
```

## 함수로 객체 만들기

```js

function createUser(
  name,
  email,
  computed = 'tel'
  number = '010-0000-0000'
){
  return {
    name: name,
    email: email,
    [computed] : number
  }
}

const user = createUser(
  'name',
  'email',
  'phone',
  '010-000'
);
```

## 클래스로 객체 만들기

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('너의 이름은');
```
