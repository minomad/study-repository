# 클래스

클래스는 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 틀이다.
정보를 일반화해서 정리하는 방법이다.
클래스는 함수이다

###

```js
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `안녕하세요 ${this.name}`;
  }
}

const yuJin = new IdolModel('안유진', 2003);
```

####
