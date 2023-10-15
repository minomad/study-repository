//! 제네릭 타입

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
