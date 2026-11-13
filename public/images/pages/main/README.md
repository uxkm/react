# 메인 글래스 그래픽

첨부된 시안을 참고해 imagegen으로 제작한 투명 PNG입니다. 시안 원본 파일이 아니며, 최종 디자인 원본으로 교체할 수 있습니다.

- ax-refresh.png: AX 프로모션의 순환 화살표
- consultation-glass.png: 맞춤상담의 파란 글래스 오브젝트
- diagnosis-glass.png: 진단·교육추천의 보라색 나침반

소스 생성일: 2026-11-13. 메인 위젯은 `/images/pages/main/` 경로로 호출합니다.

## 호출 위치에서 교체

이미지 파일을 이 폴더에 넣고, `src/widgets/b2b/main/`의 각 위젯 카드 호출부에서 `image` 또는 `slots.image`를 변경합니다. 이미지 크기·맞춤 방식은 호출부의 `imageProps`로 지정합니다. 별도의 이미지 설정 TS 파일은 없습니다. 카드 모듈의 README에 두 방식의 사용 예제가 있습니다.
