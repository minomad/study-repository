# DOM 스타일과 클래스

## 클래스
`className`: class이름을 가져오거나 설정할 수 있음

`classList`   
`add`: 추가   
`remove`: 제거   
`toggle`: boolean 값 반환   
`contains`: class가 있는지 확인

```js
const first = getNode('.first');

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active');

console.log(first.classList.contains('is-active'));

```


## 스타일
getComputedStyle 스타일을 계산하여 반환하는 읽기 전용

### computed property
객체의 키 값에 변수를 할당할 때