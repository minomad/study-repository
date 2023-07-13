# class 클래스

```js
// Anumal -> tiger => 호돌이

class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  constructor(name) {
    // tiger상수에 의해서 최초 1회 실행
    this.name = name; // tiger.name = '호돌이' 값을 받기위해서 this
  }
  set eat(food) {
    this.stomach.push(food);
  }
  get eat() {
    return this.stomach;
  }
}

// const tiger = new Animal('호돌이'); // 호출은 생성자 함수랑 동일

class Tiger extends Animal {
  #prey = ''; //# 프라이빗

  constructor(name, pattern) {
    super(name);
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