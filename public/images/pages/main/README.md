# 메인 글래스 그래픽

첨부된 시안을 참고해 imagegen으로 제작한 투명 PNG입니다. 시안 원본 파일이 아니며, 최종 디자인 원본으로 교체할 수 있습니다.

- ax-refresh.png: AX 프로모션의 순환 화살표
- consultation-glass.png: 맞춤상담의 파란 글래스 오브젝트
- diagnosis-glass.png: 진단·교육추천의 보라색 나침반

소스 생성일: 2026-11-13. 메인 위젯은 `/images/pages/main/` 경로로 호출합니다.

## 호출 위치에서 교체

이미지 파일을 이 폴더에 넣고, `src/widgets/b2b/main/`의 각 위젯 카드 호출부에서 `image` 또는 `slots.image`를 변경합니다. 이미지 크기·맞춤 방식은 호출부의 `imageProps`로 지정합니다. 별도의 이미지 설정 TS 파일은 없습니다. 카드 모듈의 README에 두 방식의 사용 예제가 있습니다.

## typeB hero 배경

현재 메인 Hero는 Figma `ver3-home`의 `top` 프레임(1920 × 999)을 기준으로 투명 도형을 배치합니다. `ver3-home/`의 매듭·오른쪽 구체·작은 구체는 원본 이미지이고, 글로우·파형·꽃·하단 구체는 원본 레이어의 자르기와 효과가 반영된 PNG 내보내기입니다. 태블릿·모바일에는 같은 PNG를 화면 너비에 맞춰 배치합니다.

아래는 초기 시안 자산입니다.

2026-11-16, built-in image_gen으로 생성한 시안 참조 이미지입니다. 원본 디자인 자산이 아닙니다. 생성 PNG를 WebP로 최적화했습니다.

- PC: `public/images/pages/main/hero-type-b.webp`
- 모바일: `public/images/pages/main/hero-type-b-mobile.webp`
- 사용 위치: `src/styles/pages/b2b/index.scss`, `.main-hero_typeB`

PC 생성 프롬프트:

> Create a polished 3D abstract background image for a Korean enterprise education landing page. Landscape 16:9. Very dark midnight navy background (#171c30). Iridescent glossy glass sculptures float around edges: large complex purple chrome inflated tubular knot cropped on left around 40% height; large luminous orange magenta purple glass orb cropped at top right; small blue violet glass flower at upper right center; tiny blue glass spheres; pleated lavender glass sphere at bottom left-center; enormous curved flowing ribbed blue violet iridescent glass surface entering bottom right. Exact center region (25%-75% horizontal, 35%-75% vertical) must remain clean dark navy negative space for website text overlay. Luxurious photorealistic CGI, subtle blue atmosphere, clear luminous highlights. No text, no letters, no logos, no UI. This is a background asset only. Save generated image for use in current local project.

모바일 생성 프롬프트 (생성된 PC 배경을 참조):

> Create a portrait mobile website background variant of the supplied navy iridescent glass image, with the same CGI materials and style. Aspect ratio 9:16. Layout: orange magenta glass orb cropped at upper right, purple chrome tubular knot cropped left at upper 25%, tiny blue violet glass flower at 30% height right-center, tiny blue spheres in upper half. Keep middle-lower center (45%-78% vertical) very dark clean navy negative space to place a white mobile headline and buttons. Small lavender pleated sphere near bottom left. Large curved luminous ribbed blue violet glass arc enters bottom right, kept mostly below 80% height. Dark midnight navy #171c30. No text, no lettering, no logo, no UI.

## 태블릿 배경

- 저장 경로: `public/images/pages/main/hero-type-b-tablet.webp`
- 2026-11-16, built-in image_gen으로 모바일 배경을 참조해 4:5 비율의 구성을 생성했습니다. PNG를 WebP로 최적화했습니다.
- 768~1099px 세로 화면에서 사용합니다. 같은 구간의 가로 화면은 PC 배경을 사용하며 UI와 일반 스크롤은 모바일 방식을 유지합니다.

생성 프롬프트:

> Create a tablet portrait 4:5 aspect ratio variant of the reference image for a website hero background. Preserve the dark midnight navy background and photorealistic iridescent purple blue glass materials. Recompose the full scene to the 4:5 canvas, do NOT crop a narrow phone image. Keep the purple chrome tubular knot cropped at left upper edge, orange magenta glass orb at top right edge, small blue glass flower upper right, small lavender pleated sphere at bottom left, flowing ribbed blue violet glass arc entering bottom right corner. Objects stay around the outer edges. Keep the central area, especially 40%-85% of image height, dark clean navy empty space for white website text overlay. Moderate object scale, all major glass forms recognizable. No text, no lettering, no UI, no logos. The output is the background artwork only.

## PC 개별 도형 레이어

PC(1100px 이상)는 합성 배경 대신 `hero-objects/`의 알파 투명 WebP 6종을 8개 레이어로 배치합니다. 개별 저장 경로와 built-in image_gen 편집 프롬프트는 [도형 README](hero-objects/README.md)를 참고하세요. 태블릿·모바일 배경은 유지합니다.
