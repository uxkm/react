import { Swiper, SwiperSlide } from 'swiper/react' // Swiper React
import {
  A11y, // A11y 컴포넌트
  Autoplay, // Autoplay 컴포넌트
  EffectCoverflow, // Effect Coverflow 컴포넌트
  EffectFade, // Effect Fade 컴포넌트
  FreeMode, // Free Mode 컴포넌트
  Grid, // Grid 컴포넌트
  Keyboard, // Keyboard 컴포넌트
  Navigation, // Navigation 컴포넌트
  Pagination, // Pagination 컴포넌트
  Thumbs // Thumbs 컴포넌트
} from 'swiper/modules' // Swiper 모듈

import 'swiper/css' // swiper 패키지
import 'swiper/css/navigation' // swiper 패키지
import 'swiper/css/pagination' // swiper 패키지
import 'swiper/css/effect-fade' // swiper 패키지
import 'swiper/css/effect-coverflow' // swiper 패키지
import 'swiper/css/grid' // swiper 패키지
import 'swiper/css/free-mode' // swiper 패키지
import 'swiper/css/thumbs' // swiper 패키지

export {
  Swiper,
  SwiperSlide,
  A11y,
  Autoplay,
  EffectCoverflow,
  EffectFade,
  FreeMode,
  Grid,
  Keyboard,
  Navigation,
  Pagination,
  Thumbs
}

/** 슬라이더에서 기본으로 켜 두는 모듈 */
export const defaultSwiperModules = [Navigation, Pagination, Autoplay, A11y, Keyboard]

/** Carousel 컴포넌트용 전체 모듈 */
export const carouselSwiperModules = [
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Keyboard,
  EffectFade,
  EffectCoverflow,
  Grid,
  Thumbs,
  FreeMode
]
