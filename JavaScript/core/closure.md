# 클로저

함수 내부에서 정의된 함수(본문)을 외부에서 반환하는 것을 클로저
내부 함수를 담고 있는 것이 클로저
함수는 자신이 태어난 환경을 기억한다.
전역의 오염을 막기 위함
값을 기억하기 위함 (가비지 컬렉터 수집X)
내가 설정한 값을 함부로 수정할 수 없게 할 수 있음.

```js
function first() {
  let x = 10;

  function second() {
    //@ firts 안에 태어난 것을 기억함
    let y = 5;
    return x + y; //@ 리턴값을 실행해야 x가 값을 찾음
  }
  return second; //@ 실행하지 않고 함수 본문을 리턴함
}
//!curring function
// first()(); //@ first를 실행하면 본문이 나오고 그걸 다시 실행함

const value = first(); //@ 클로저는 이렇게 사용함
//@ value에 함수본문이 담겨있기에 함수처럼 사용할 수 있음.

value(); //@ second를 강제로 밖으로 가져와서 사용하는게 클로저
```

###

클로저에서 말하는 환경이라 함은,
earth의 지역변수를 기억하는 outer function object이고
tiger인 inner function object는 그것을 참조할 수 있다

외부함수에 변수를 지정하고 내부함수에서 실행한다
