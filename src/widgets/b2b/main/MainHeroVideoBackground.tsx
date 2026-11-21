'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { useMediaQuery } from '@/hooks/layout/useMediaQuery';

const poster = '/assets/b2b/main/hero-poster.jpg';
const source = '/assets/b2b/main/hero-background.mp4';

/** 데스크톱 메인에서 히어로가 화면에 들어올 때만 배경 영상을 재생합니다. */
export default function MainHeroVideoBackground({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canPlay = useMediaQuery('(min-width: 1100px) and (prefers-reduced-motion: no-preference)');

  useEffect(() => {
    const video = videoRef.current;
    if (!canPlay || !video) return;

    video.muted = true;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [canPlay]);

  return (
    <div
      className="main-hero_artwork main-hero_artwork-video"
      aria-hidden="true"
    >
      {canPlay && (
        <video
          ref={videoRef}
          className="main-hero_video"
          src={source}
          poster={poster}
          preload="none"
          muted
          loop
          playsInline
        />
      )}
      <div className="main-hero_video-details">{children}</div>
    </div>
  );
}
