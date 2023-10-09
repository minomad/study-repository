# 타입

primitive, any, array, tuple, enum, function/union/void, object, null/undefinde, never  
사용자 정의, 타입 어설션

## primitive 타입

number, string, boolean

```ts
let num: number = 123;

let name: string = "이름";

let bool: boolean = true;
```

## array 타입

```ts
// 오직 숫자 아이템만 허용
let nums: number[] = [100, 101, 102];

// 오직 문자 아이템만 허용
let strs: string[] = ["ㄱ", "ㄴ", "ㄷ"];

// 오직 불리언 아이템만 허용
let boos: boolean[] = [true, false, true];

// 모든 데이터 타입을 아이템으로 허용
let anys: any[] = [100, "ㄴ", true];

// 특정 데이터 타입만 아이템으로 허용
let selects: (number | string)[] = [102, "ㅇ"];
```

## tuple 타입

배열 타입을 보다 특수한 형태로 사용할 수 있는 터플 타입

지정된 형식에 따라 아이템 순서를 설정

```ts
let x: [string, number];

x = ["hello", 10]; // OK

x = [10, "hello"]; // Error
```

## enum 타임

열거형 데이터 타입

## function / union / void 타입

void 0은 undefined와 같다. 명시적으로 반환 값을 설정하지 않는 함수는 undefined를 반환하기에 TypeScript에서는 void를 명시

```ts
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
};

let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
```

```ts
function add(...num: number[]) {
  return num.reduce((reult, num) => result + num, 0);
}
add(1, 2, 3);
```

#### this

```ts
interface User {
  name: string;
}

const Sam: User = { name: "sam" };

function showName(this: User) {
  consle.log(this.name);
}

const a = showName.bind(Sam);
a();
```

#### union

let assign_name:string|null = null;

## never 타입

never는 일반적으로 함수의 리턴 타입으로 사용됩니다. 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미합니다. 이는 무한 루프(loop)에 빠지는 것과 같습니다.
