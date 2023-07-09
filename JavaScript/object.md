# 객체

성격이 비슷한 오브젝트끼릴 묶음

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

