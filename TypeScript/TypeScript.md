# TypeScript

대표 기능

- 엄격한 타입관리
- 제너릭
- 인터페이스

## 초기설정

#### 타입스크립트 설치

```
npm i -g typescript
```

```
tsc --init
```

#### TSLint

```
npm install tslint typescript -g
```

```
tslint --init
tslint -c tslint.json 'src/\*_/_.ts'
```

## Airbnb 스타일

npm i tslint-config-airbnb

## Google TypeScript Style

```
npx gts init
```

## TSDX

```
npx tsdx create <프로젝트_이름>
```

## 실전

```tsx
import { useState } from "react";

// 타입 지정
export type objTpye = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

// 타입의 타입을 지정
export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

// 필요없는 타입 제거
export type AddresWithoutzip = Omit<Address,'zipCode'>

// 필요한 타입만 가져오기
export type AddresOnlyzip = pick<Address,'zipCode'>


//API타입
export type Api<T>{
  data:T[],
  totalPage:number,
  page:number
}

export type AddressRes = Api<Address>
export type MenuRes = Api<Menu>


// App.tsx
let data: objTpye = {
  name: "식당",
  category: "양식",
  address: {
    city: "서울",
    detail: "상세주소",
    zipCode: 12345,
  },
  menu: [
    { name: "파스타", price: 20000, category: "파스타" },
    { name: "스테이크", price: 30000, category: "스테이크" },
  ],
};

function App:React.FC() {
  const [my, setMy] = useState<objTpye>(data);
  const change = (address:Address) => {
    setMy({...my,address:address})
  };

  return (
    <>
      <div info={my} change={change}/>
      <BestMenu/>
    </>
  );

};

export default App;
```

## interface

```tsx
interface OwnProps {
  info: objTpye;
  change(address:Address):void // return값이 없을때 void
}

function Store:React.FC<OwnProps> (props) {
  return (
    <div>{info.name}<div/>
  )
}
```

## extends

```tsx
interface OwnProps extends Omit<Menu, "price"> {}
type OwnProps = Menu & {};

const BestMenu: React.FC<OwnProops> = () => {
  return <div>best</div>;
};
```
