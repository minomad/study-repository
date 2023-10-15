//! 제네릭 타입
// 데이터 타입을 일반화
// 자료형을 정하지 않고 여러 타입을 사용할 수 있게 해준다.
// 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다. 
// 한번의 선언으로 다양한 타입에 '재사용'이 가능하다는 장점이 있다.

//@ 제네릭 함수
function item<T>(arr: T[], index: number): T {
  return arr[index];
}

//@ 멀티 타입
type arr = [any, any][];

// 멀티 타입 T, M 설정된 함수 pushPairItem 정의
function pushPairItem<T, M>(arr: arr, item: [T, M]): arr {
  arr.push(item);
  return arr;
}

// piarArray 타입으로 설정된 data 배열 선언
const data: arr = [];

// 멀티 타입을 지정한 후, 적절한 타입을 포함하는 데이터 추가
pushPairItem<boolean, string>(data, [false, "false"]);
pushPairItem<number, string>(data, [2019, "이천십구년"]);

//@ 타입 변수를 상속할 수도 있다.
