# 객체

키와 값들을 그룹으로 묶은 모음

객체는 key: valu의 형태로 중괄호{}안에 정의하는데 이를 속성(properites)라고 합니다.

속성의 키는 데이터에 접근하기 위한 식별자로서의 역할을 한다. 식별자(변수)네이밍 규칙을 따르

객체의 프로퍼티 값에는 함수도 사용이 가능하다

```js
let pikachu = {
  name: '피카츄',
  group: '포켓몬',
  skill: function () {
    return `${this.name} 백만볼트`;
  },
};
```

### const로 선언한 객체의 특징
const 객체 자체를 변경할수는 없지만 객체 안의 프로퍼티나 메서드는 변경할 수 있다.

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
  }
};
picachu['group'] = '디지몬';
picachu['eng'] = 'picachu';
```

모든 키값
```js
Object.keys(picachu)
```

모든 벨류값
```js
Object.values(picachu)
```

