### App Router

- React 18 사용
- Next 서버에서 리액트를 미리 랜더링해서 클라이언트로 데이터를 보내주면, 완성된 HTML을 보내줌.
  HTML 로딩시간 & JS 용랑 줄어듦

사용자의 브라우저에서 했던 일들을 Next 서버에서 혼자 다하기 때문에 부담이 매우 증가했다.
=> 캐싱 처리

Next는 백엔드 서버가 없을 때에도 서버를 실행할 수 있다.
(백엔드는 Next 프리즈마 강좌 나올 예정)

# template.tsx, Link, Image, redirect

페이지 넘어갈 때마다
리랜더링 O -> template.tsx
리랜더링 X -> layout.tsx

따라서 이 둘은 공존할 수 없음.

### redirect

```
import { redirect } from "next/navigation";

redirect("원하는 URL");
```

로그인 없이 select 페이지에 진입했을 때 Home(로그인해라)으로 이동하게 될 듯

#### Error Log

![Alt text](image-1.png)

`Error: Event handlers cannot be passed to Client Component props.`

최상단 컴포넌트에 'use client'를 붙이면 된다.
서버 컴포넌트에서 클라이언트 컴포넌트로 함수를 전달하려고 할 때, 함수는 직렬화(serializable)할 수 없기 때문에 문제가 발생.
해당 페이지를 클라이언트 컴포넌트로 전환하는 것이 유일한 해결책.

### Image

next의 Image 태그는 이미지 최적화를 해준다

# 스타일링

## css 스타일링 종류

1. module css

```
import ./global.css
import ./page.module.css
```

같은 위치에 있지만 글로벌한 스타일은 global.css로,
특정 페이지만의 스타일은 page.module.css로

모듈이 알아서 다른 페이지의 클래스 네임과 다르게 처리해줌.

페이지에서 사용은 아래처럼.

```
<div className={styles.left}>
```

2. Styled component

서버 컴포넌트 SSR 쪽에서 문제가 있다.

3. sass

4. Vanilla extract

윈도우와 문제 있음

### 새로운 단위 dvw, dvh

`dvw` : dynamic viewport width
`dvh` : dynamic viewport height

모바일 브라우저에서 주소창 유무에 따른 뷰포트 사이즈 감지


# Parallel Routes

모달이 뜨면 주소가 변경되어야하는데, 기존에 있던 페이지를 그대로 유지하고 싶다.
그럴 때 사용하는 것이 패러렐 라우트.

### default.tsx

default.tsx는 Parallel Routes의 기본값.
패러렐 라우트인데, 패러렐 라우트가 필요가 없을 경우의 기본적인 페이지.
나는 URL이 변경될 필요가 없어서 그냥 만들지 않았다.

![Alt text](image-2.png)

페이지 구조가 위 경우일 경우.
기본적으로는 모달이 뜨지 않음. 그때에는 실제로는 아무것도 그리지 않게 null을 return한다.

- localhost:3000일 때에는?
children = page.tsx, modal = @modal/default.tsx
(이게 없으면 페이지를 찾을 수 없어 오류가 난다)

- localhost:3000/i/flow/login일 때에는?
children = i/flow/login/page.tsx, modal = @modal/i/flow/login/page.tsx




# Intercepting Routes

서로 주소가 다른데 같이 뜰 수 있게 해주는 인터셉팅 라우트

intercept–route-test 브랜치에서 테스트 중.
parallel route까지는 적용 완료


# URL에는 뜨지 않는 route

1. group 폴더
(tableGroup)/

주요역할 : 그룹의 공통 레이아웃 설정 가능

2. pararllel route 폴더

@modal/
@auth/

한 화면에 두 개의 페이지를 동시에 보여주는 용도.

3. private 폴더

_components/

주소창에 뜨지 않는 폴더정리용

 




















# 서버 컴포넌트와 클라이언트 컴포넌트

React 18부터 추가된 서버 서버 컴포넌트 개념.
모든 컴포넌트는 기본적으로 모두 서버 컴포넌트, 이 서버 컴포넌트들은 Next JS 서버에서 돈다.

리액트는 원래 프론트엔드 라이브러리이기 때문에 컴포넌트가 클라이언트에서 돈다.
서버에서 돌기 때문에 컴포넌트에 async를 붙일 수 있다.

대신 useEffect, useState와 같은 훅들을 사용하려면,
반드시 최상단에 "use client"를 붙여 클라이언트 컴포넌트로 변경해야한다.







## What is server component in Next 14

![Alt text](image.png)
https://nextjs.org/docs/app/building-your-application/rendering/server-components

서버 컴포넌트는 UI를 그리고, 그 UI가 서버에 캐싱할 수 있는 옵션을 제공한다.

