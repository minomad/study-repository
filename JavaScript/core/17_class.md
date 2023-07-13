# class 클래스

객체 지향 프로그래밍
요즘은 클래스보단 함수를 많이 사용하는 추세

set과 get은 함수처럼 보이지만 객체

```js
class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  constructor(name) {
    // tiger상수에 의해서 최초 1회 실행
    this.name = name; // tiger.name = '호돌이' 값을 받기위해서 this
  }
  set eat(food) {
    // 값을 셋팅
    this.stomach.push(food);
  }
  get eat() {
    // 값을 가져온다.
    return this.stomach;
  }
}

// const tiger = new Animal('호돌이'); // 호출은 생성자 함수랑 동일
```

extends 사용시 super도 함께 사용해야합니다. <br/>
`super`를 통해서 부모 함수의 constructor 값을 참조 할 수 있습니다.<br/>
`#`프라이빗은 인스턴스에 속하며 외부에서 직접 접근할 수 없습니다.
 
```js
class Tiger extends Animal {
  #prey = ''; //# 프라이빗

  constructor(name, pattern) {
    super(name); //
    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`;
  }

  static sleep(name) {
    // Tiger클래스가 가지는 메서드인데 모두가 사용가능
    console.log(name + '이 잠을 잔다.');
  }
}

const beom = new Tiger('범', '호랑이무늬');

const hoho = new Tiger('hoho', '호피무늬');
```
