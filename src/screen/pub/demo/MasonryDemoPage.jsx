'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/comp';
import { createMasonry } from '@/lib/vendor/masonry';
import { DemoLayout } from '@/screen/pub/layout/DemoLayout';
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock';
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode';

const heights = [160, 240, 190, 280, 210, 170];

const exampleCode = wrapPageExample(
  `const gridRef = useRef(null)

useEffect(() => {
  const controller = new AbortController()
  let cancelled = false
  let masonry
  createMasonry(gridRef.current, {
    itemSelector: '.masonry-item',
    columnWidth: '.masonry-item',
    percentPosition: true,
    transitionDuration: 0
  }, { signal: controller.signal }).then(instance => {
    if (cancelled) instance?.destroy()
    else masonry = instance
  })
  return () => {
    cancelled = true
    controller.abort()
    masonry?.destroy()
  }
}, [])

<div ref={gridRef}>
  {[160, 240, 190, 280, 210, 170].map((height, index) => (
    <div key={index} className="masonry-item" style={{ width: '33.333%', padding: 8, boxSizing: 'border-box' }}>
      <div style={{ minHeight: height, padding: 16, border: '1px solid currentColor' }}>
        카드 {index + 1}
      </div>
    </div>
  ))}
</div>`,
  {
    name: 'MasonryExample',
    reactImports: ['useEffect', 'useRef'],
    compImports: [],
    extraImports: ["import { createMasonry } from '@/lib/vendor/masonry'"],
  },
);

/** masonry-layout — 서로 다른 높이의 반응형 카드 배치 */
export default function MasonryDemoPage() {
  const gridRef = useRef(null);
  const masonryRef = useRef(null);
  const observerRef = useRef(null);
  const [count, setCount] = useState(9);
  const [error, setError] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    const controller = new AbortController();
    let cancelled = false;
    let observer;
    let frame;
    const sizes = new WeakMap();

    createMasonry(
      grid,
      {
        itemSelector: '.lib-demo-masonry_item',
        columnWidth: '.lib-demo-masonry_item',
        percentPosition: true,
        transitionDuration: 0,
      },
      { signal: controller.signal },
    )
      .then((instance) => {
        if (cancelled) {
          instance?.destroy();
          return;
        }
        masonryRef.current = instance;
        // 스타일·글꼴이 늦게 적용되면 부모 폭은 같아도 카드 크기가 달라질 수 있다.
        // Masonry가 변경하는 부모 높이는 감지 조건에서 제외해 반복 호출을 막는다.
        observer = new ResizeObserver((entries) => {
          const changed = entries
            .map((entry) => {
              const size =
                entry.target === grid
                  ? `${entry.contentRect.width}`
                  : `${entry.contentRect.width}:${entry.contentRect.height}`;
              const previous = sizes.get(entry.target);
              sizes.set(entry.target, size);
              return previous !== size;
            })
            .some(Boolean);
          if (!changed) return;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => instance.layout());
        });
        observerRef.current = observer;
        observer.observe(grid);
        for (const item of grid.children) observer.observe(item);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
      controller.abort();
      cancelAnimationFrame(frame);
      observer?.disconnect();
      observerRef.current = null;
      masonryRef.current?.destroy();
      masonryRef.current = null;
    };
  }, []);

  useEffect(() => {
    const observer = observerRef.current;
    if (observer) {
      observer.disconnect();
      observer.observe(gridRef.current);
      for (const item of gridRef.current.children) observer.observe(item);
    }
    masonryRef.current?.reloadItems();
    masonryRef.current?.layout();
  }, [count]);

  return (
    <DemoLayout
      title="Masonry"
      description="masonry-layout — 높이가 다른 카드를 빈 공간에 맞춰 배치합니다."
      slug="masonry"
    >
      <DemoBlock
        title="반응형 Masonry 카드"
        description="화면 크기를 바꾸거나 카드를 추가해 배치를 확인하세요. 좁은 영역에서는 1열, 넓은 영역에서는 2~3열로 표시합니다."
        code={exampleCode}
      >
        <div className="lib-demo-masonry_toolbar">
          <Button onClick={() => setCount((value) => value + 3)}>카드 3개 추가</Button>
          <Button
            onClick={() => setCount(9)}
            disabled={count === 9}
          >
            초기화
          </Button>
          <span role="status">카드 {count}개</span>
        </div>
        {error ? (
          <p role="alert">Masonry를 불러오지 못했습니다. 페이지를 새로고침해 주세요.</p>
        ) : null}
        <div className="lib-demo-masonry">
          <ul
            ref={gridRef}
            className="lib-demo-masonry_grid"
            aria-label="Masonry 카드 목록"
          >
            {Array.from({ length: count }, (_, index) => (
              <li
                key={index}
                className="lib-demo-masonry_item"
              >
                <div
                  className="lib-demo-masonry_card"
                  style={{ minHeight: heights[index % heights.length] }}
                >
                  <span className="lib-demo-masonry_number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>카드 {index + 1}</h3>
                  <p>서로 다른 높이의 카드를 세로 공간에 맞춰 배치합니다.</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p>
          <a
            href="https://masonry.desandro.com/"
            target="_blank"
            rel="noreferrer"
          >
            Masonry 공식 문서
          </a>
        </p>
      </DemoBlock>
    </DemoLayout>
  );
}
