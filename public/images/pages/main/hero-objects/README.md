# PC hero 분리 도형

2026-11-16, built-in image_gen의 배경 분리 편집으로 `../hero-type-b.webp`에서 각 도형을 별도 생성했습니다. 잘려 있던 가장자리는 복원하므로 원본 픽셀과 완전히 동일한 추출은 아닙니다. 실제 알파 투명도를 확인하고 WebP로 최적화했습니다.

저장 위치: `public/images/pages/main/hero-objects/`

- `knot.webp`: 왼쪽 매듭
- `orb.webp`: 상단 오른쪽 구체
- `flower.webp`: 글래스 꽃
- `ribbed-sphere.webp`: 하단 주름 구체
- `wave.webp`: 오른쪽 하단 곡면
- `bubble.webp`: 작은 구체, 3곳에 크기·불투명도를 달리해 재사용

1100px 이상에서 각 도형을 CSS 레이어로 배치합니다. 7~18초의 서로 다른 주기로 이동·회전·원근 변화를 적용합니다. 화면 밖으로 벗어나면 정지하며 `prefers-reduced-motion: reduce`에서는 애니메이션을 사용하지 않습니다. 태블릿·모바일은 기존 합성 배경을 사용합니다.

배치·애니메이션: `src/styles/pages/b2b/main/_hero-artwork.scss`

## 생성 프롬프트

### knot

Use case: background-extraction. Asset type: transparent cutout for separately animated website hero objects. Input image is the edit target. Extract the specified object from the existing artwork, preserving the design, colors, glass texture and photorealistic CGI shading as closely as possible. Only the large iridescent purple chrome inflated tubular knot on the LEFT of the source image. Reconstruct any clipped outer edges to make one complete standalone knot, keep recognizable intertwined rounded loops and violet/cyan specular lighting. No other objects. Remove the entire midnight navy background and every other object. Actual transparent alpha background, including empty spaces between loops or petals. No opaque backdrop, no checkerboard painted into the image, no ground plane, no floor shadow, no text, no frame. Center the isolated object with a small transparent margin (except intentional wave edge crops). This must be a usable independent transparent image layer.

### orb

Use case: background-extraction. Asset type: transparent cutout for separately animated website hero objects. Input image is the edit target. Extract the specified object from the existing artwork, preserving the design, colors, glass texture and photorealistic CGI shading as closely as possible. Only the luminous orange-magenta-purple glass orb cropped in the TOP RIGHT of the source image. Reconstruct the clipped edges to one full standalone rounded orb with the same flowing molten-glass surface and orange rim reflections. No other objects. Remove the entire midnight navy background and every other object. Actual transparent alpha background, including empty spaces between loops or petals. No opaque backdrop, no checkerboard painted into the image, no ground plane, no floor shadow, no text, no frame. Center the isolated object with a small transparent margin (except intentional wave edge crops). This must be a usable independent transparent image layer.

### flower

Use case: background-extraction. Asset type: transparent cutout for separately animated website hero objects. Input image is the edit target. Extract the specified object from the existing artwork, preserving the design, colors, glass texture and photorealistic CGI shading as closely as possible. Only the small blue-violet glass flower in the UPPER RIGHT-CENTER of the source image. Preserve its five rounded inflated glass petals, orientation, purple/cyan highlights. One flower only. Remove the entire midnight navy background and every other object. Actual transparent alpha background, including empty spaces between loops or petals. No opaque backdrop, no checkerboard painted into the image, no ground plane, no floor shadow, no text, no frame. Center the isolated object with a small transparent margin (except intentional wave edge crops). This must be a usable independent transparent image layer.

### ribbed-sphere

Use case: background-extraction. Asset type: transparent cutout for separately animated website hero objects. Input image is the edit target. Extract the specified object from the existing artwork, preserving the design, colors, glass texture and photorealistic CGI shading as closely as possible. Only the pleated lavender glass sphere near the BOTTOM LEFT-CENTER of the source image. Preserve spiral ribbing, pearly violet/cyan reflections and spherical silhouette. One sphere only. Remove the entire midnight navy background and every other object. Actual transparent alpha background, including empty spaces between loops or petals. No opaque backdrop, no checkerboard painted into the image, no ground plane, no floor shadow, no text, no frame. Center the isolated object with a small transparent margin (except intentional wave edge crops). This must be a usable independent transparent image layer.

### wave

Use case: background-extraction. Asset type: transparent cutout for separately animated website hero objects. Input image is the edit target. Extract the specified object from the existing artwork, preserving the design, colors, glass texture and photorealistic CGI shading as closely as possible. Only the enormous curved ribbed flowing blue-violet glass surface entering from the BOTTOM RIGHT of the source image. Isolate the curved sweeping ribbon-like glass arc with its cyan ridges and purple channels, retain its diagonal bottom-left to upper-right flow. The shape can extend off the lower and right canvas edges. No spheres, knot or flower. Remove the entire midnight navy background and every other object. Actual transparent alpha background, including empty spaces between loops or petals. No opaque backdrop, no checkerboard painted into the image, no ground plane, no floor shadow, no text, no frame. Center the isolated object with a small transparent margin (except intentional wave edge crops). This must be a usable independent transparent image layer.

### bubble

Use case: background-extraction. Asset type: transparent cutout for separately animated website hero objects. Input image is the edit target. Extract the specified object from the existing artwork, preserving the design, colors, glass texture and photorealistic CGI shading as closely as possible. Only one of the small smooth BLUE GLASS BUBBLES in the source image. A single complete spherical glass marble with vivid cyan lower rim, violet upper rim, tiny bright white specular reflection, and glossy translucent depth. No other objects. Remove the entire midnight navy background and every other object. Actual transparent alpha background, including empty spaces between loops or petals. No opaque backdrop, no checkerboard painted into the image, no ground plane, no floor shadow, no text, no frame. Center the isolated object with a small transparent margin (except intentional wave edge crops). This must be a usable independent transparent image layer.

