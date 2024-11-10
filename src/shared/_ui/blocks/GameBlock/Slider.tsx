'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { GameElement, GameLib } from 'shared/_ui'

import type { MutableRefObject } from 'react'
import type { SwiperRef } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'

interface IProps {
  sliderRef: MutableRefObject<Nullable<SwiperRef>>
}
export const Slider = ({ sliderRef }: IProps) => {
  const breakpoints: SwiperOptions['breakpoints'] = {
    1000: { slidesPerView: 7, spaceBetween: 0, slidesOffsetBefore: 320, slidesOffsetAfter: 0 },
    640: { slidesPerView: 2, spaceBetween: 10, slidesOffsetBefore: 10, slidesOffsetAfter: 40 },
    320: { slidesPerView: 2, spaceBetween: 10, slidesOffsetBefore: 10, slidesOffsetAfter: 40 },
  }

  return (
    <Swiper
      ref={sliderRef}
      slidesPerView={7}
      spaceBetween={0}
      centeredSlides={false}
      pagination={{
        clickable: true,
      }}
      modules={[]}
      className='mySwiper pt-[10px]'
      initialSlide={0}
      slidesOffsetBefore={320}
      breakpoints={breakpoints}
    >
      {GameLib.map(({ poster, id, name }) => {
        return (
          <SwiperSlide key={id}>
            <GameElement
              name={name}
              src={poster}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
