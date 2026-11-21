'use client';

import { useEffect, useRef, useState } from 'react';
import { preload } from 'react-dom'; // preload
import type { CSSProperties, ReactNode } from 'react'; // React
import type { CardImageData, CardImageSource } from './cardTypes'; // card Types

interface CardBackgroundProps {
  readonly as?: 'div' | 'span';
  readonly image?: CardImageSource;
  readonly imageProps?: Partial<CardImageData>;
  readonly children?: ReactNode;
  readonly className?: string;
  readonly priority?: boolean;
  readonly fallback?: ReactNode;
}

/** 카드 그래픽을 CSS 배경으로 표시합니다. 크기·맞춤·위치는 CSS 변수로 전달합니다. */
export default function CardBackground({
  as: Element = 'div',
  image,
  imageProps,
  children,
  className,
  priority = false,
  fallback,
}: Readonly<CardBackgroundProps>) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const probeRef = useRef<HTMLImageElement>(null);
  const settings = {
    ...(typeof image === 'string' ? { src: image } : (image ?? {})),
    ...imageProps,
  };

  const customContent = children !== undefined;
  const hasFallback = fallback !== undefined && fallback !== null;
  const src = settings.src?.trim() || '';
  const showFallback = !customContent && hasFallback && (!src || failedSrc === src);

  // 정적 HTML의 이미지 오류가 hydration 전에 발생한 경우도 처리합니다.
  useEffect(() => {
    const probe = probeRef.current;
    if (!customContent && hasFallback && src && probe?.complete) {
      setFailedSrc(probe.naturalWidth > 0 ? null : src);
    }
  }, [src, customContent, hasFallback]);

  if (children === null || (!customContent && !hasFallback && (image === null || !src))) {
    return null;
  }

  const accessibleImage = !customContent && !showFallback && Boolean(settings.alt);

  if (!customContent && priority && settings.src) {
    preload(settings.src, { as: 'image' });
  }

  return (
    <Element
      className={`card_background ${showFallback ? 'is-fallback' : ''} ${className ?? ''}`}
      role={accessibleImage ? 'img' : undefined}
      aria-label={accessibleImage ? settings.alt : undefined}
      aria-hidden={!customContent && !accessibleImage ? true : undefined}
      style={
        {
          '--card-background-image':
            !customContent && !showFallback && src ? `url(${JSON.stringify(src)})` : 'none',
          '--card-background-width':
            settings.width === undefined ? undefined : `${settings.width}px`,
          '--card-background-height':
            settings.height === undefined ? undefined : `${settings.height}px`,
          '--card-background-size': settings.fit ?? 'contain',
          '--card-background-position': settings.position ?? 'center',
        } as CSSProperties
      }
    >
      {!customContent && hasFallback && src && (
        <img
          ref={probeRef}
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          style={{ display: 'none' }}
          onError={() => setFailedSrc(src)}
          onLoad={() => setFailedSrc(null)}
        />
      )}
      {showFallback ? fallback : children}
    </Element>
  );
}
