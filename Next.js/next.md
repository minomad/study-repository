설치

```
npx create-next-app@latest

```

루트레이아웃은 필수
layout는 해당 폴더에 있는 page를 감싸는 파일
페이지2/3/4 공통된 ui를 넣고 싶을때

import Link from 'next/link';

<Link href="/dashboard">대시보드</Link>;

다이나믹루트 (id)
동적 세그먼트는 폴더 이름을 대괄호([])로 묶음으로써 생성할 수 있습니다. (예: [id], [slug])

서버 컴포넌트를 props로 클라이언트 컴포넌트에 전달  
서버 컴포넌트를 클라이언트 컴포넌트로 가져올 수 없다

createContext는 서버 컴포넌트를 지원하지 않습니다.  
이 문제를 해결하려면 컨텍스트를 만들고 클라이언트 컴포넌트 내부에서 해당 프로바이더를 렌더링합니다.

서버 컴포넌트 간 데이터 공유
비대화형으로 상태를 사용할 수 없다
js모듈을 사용

page파일은 layout을 찾는다

다이나믹라우팅은 페이지폴더/[id]폴더/page.jsx  
id값은 props.params.id로 가져옴

라우트핸들러-백엔드

리벨리데이팅 - 케시

'"경로"+id'
