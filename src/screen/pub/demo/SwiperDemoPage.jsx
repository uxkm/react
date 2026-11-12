'use client'

import { Swiper, SwiperSlide, defaultSwiperModules } from '@/lib/swiper'
import { DemoLayout } from '@/screen/pub/layout/DemoLayout'
import { DemoBlock } from '@/screen/pub/widgets/preview/DemoBlock'
import { wrapPageExample } from '@/screen/pub/lib/pageExampleCode'

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
      description="swiper — Navigation / Pagination / Autoplay (@/lib/swiper)"
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
            `import { Swiper, SwiperSlide, defaultSwiperModules } from '@/lib/swiper'

const slides = [
  { label: 'Slide 1', color: '#1f6feb' },
  { label: 'Slide 2', color: '#238636' },
  { label: 'Slide 3', color: '#9a6700' }
]`
          ]
        })}
      >
        <div className="lib-demo-swiper">
          <Swiper
            modules={defaultSwiperModules}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            loop
            spaceBetween={0}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.label}>
                <div style={{ background: slide.color, width: '100%', minHeight: 180, display: 'grid', placeItems: 'center' }}>
                  {slide.label}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </DemoBlock>
    </DemoLayout>
  )
}
