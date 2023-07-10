# 게터
1. eo

###

```js
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  get nameAndYear() {
    return `안녕하세요 ${this.name}`;
  }
}

```

####
