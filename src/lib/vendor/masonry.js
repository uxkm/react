/** 브라우저에서만 로드하여 Next.js 서버 렌더링 중 window 참조를 방지한다. */
export async function createMasonry(element, options = {}, { signal } = {}) {
  if (!element || signal?.aborted) return null;
  const { default: Masonry } = await import('masonry-layout');
  // Strict Mode의 이전 effect가 취소되었다면 DOM을 변경하는 생성자를 실행하지 않는다.
  if (signal?.aborted) return null;
  return new Masonry(element, options);
}
