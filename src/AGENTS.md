# 소스 분류 규칙

- 퍼블리싱 목록·가이드·데모·작업 전 안내 등 PUB 전용 구현은 `src/screen/pub/`에 모은다. 내부의 `layout/`, `widgets/`, `hooks/`, `lib/`, `data/`로 역할을 나눈다.
- 최상위 `src/widgets/`, `src/modules/`, `src/hooks/`, `src/lib/`에 PUB 전용 `pub/` 폴더를 만들지 않는다.
- 일반 페이지에서도 재사용하는 UI·레이아웃·훅·유틸리티는 공통 위치를 유지한다. 가이드나 데모에서 사용한다는 이유만으로 공통 기능을 PUB로 옮기지 않는다.
- 프로젝트 디자인·업무에 종속된 구현은 `screen/b2b/`, `widgets/b2b/`, `modules/b2b/` 등 프로젝트 영역에 둔다.
- Next.js 라우트, 정적 공개 자산, 스타일 진입점, 빌드 스크립트 등 위치에 제약이 있는 파일은 기존 구조를 따른다. 이동 시 실제 import와 문서·예제의 경로도 함께 수정한다.

- PUB 화면의 전체 배치·헤더 구성은 `screen/pub/layout/`, 개별 UI는 `screen/pub/widgets/`의 역할별 하위 폴더에 둔다. 코드 예제 생성 등 UI가 아닌 함수는 `screen/pub/lib/`에 둔다.

- 파일명·대표 export는 실제 역할을 드러내도록 정한다. `Skel`, `Fx` 등 불필요한 축약과 용도가 불분명한 `store`, `scroll` 같은 이름은 피한다. 라이브러리 연동 파일은 실제 라이브러리 이름을 사용한다.
- Next.js 예약 파일명, 폴더의 공개 입구인 `index`, Button·Modal 등 일반적인 UI 명칭과 널리 쓰이는 라이브러리 이름은 유지한다. 프로젝트 화면의 `index.tsx`와 `skeleton/indexSkeleton.tsx` 규칙도 유지한다.
