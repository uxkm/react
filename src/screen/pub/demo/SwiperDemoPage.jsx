'use client'

import { Carousel, CarouselSlide } from '@/comp/ui/Carousel'
import { DemoLayout } from '@/screen/pub/layout/DemoLayout' // Demo Layout 컴포넌트
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock' // Demo Block 컴포넌트
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode' // wrap Page Example

const slides = [
  { label: 'Slide 1', color: '#1f6feb' },
  { label: 'Slide 2', color: '#238636' },
  { label: 'Slide 3', color: '#9a6700' },
  { label: 'Slide 4', color: '#a40e26' }
]

/** swiper 데모 */
export default function SwiperDemoPage () {
  return (
    <DemoLayout
      title="Swiper"
      description="swiper — Navigation / Pagination / Autoplay (@/lib/vendor/swiper)"
      slug="swiper"
    >
      <DemoBlock
        title="기본 슬라이더"
        code={wrapPageExample(`<Swiper
  modules={defaultSwiperModules}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 2800, disableOnInteraction: false }}
  loop
  spaceBetween={0}
>
  {slides.map((slide) => (
    <SwiperSlide key={slide.label}>
      <div style={{ background: slide.color, minHeight: 180 }}>{slide.label}</div>
    </SwiperSlide>
  ))}
</Swiper>`, {
          name: 'SwiperExample',
          reactImports: [],
          compImports: [],
          extraImports: [
            `import { Swiper, SwiperSlide, defaultSwiperModules } from '@/lib/vendor/swiper'

const slides = [
  { label: 'Slide 1', color: '#1f6feb' },
  { label: 'Slide 2', color: '#238636' },
  { label: 'Slide 3', color: '#9a6700' }
]`
          ]
        })}
      >
        <div className="lib-demo-swiper">
          <Carousel ariaLabel="라이브러리 데모 슬라이더" pagination="bullets" autoplay delay={2800} autoplayToggle loop>
            {slides.map(slide => (
              <CarouselSlide key={slide.label}>
                <div style={{ background: slide.color, color: '#fff', minHeight: 180, display: 'grid', placeItems: 'center' }}>{slide.label}</div>
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
