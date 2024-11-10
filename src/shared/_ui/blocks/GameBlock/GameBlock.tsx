'use client'

import { useCallback, useRef } from 'react'

import { Button, Slider } from 'shared/_ui'

import nextButton from '../../../../../public/assets/nextButton.svg'

import type { SwiperRef } from 'swiper/react'

export const GameBlock = () => {
  const sliderRef = useRef<Nullable<SwiperRef>>(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div
      className='pb-[51px]'
      id='game'
    >
      <div>
        <div className='container mx-auto flex max-w-[1100px] flex-col items-center  py-[51px] lg:flex-row lg:items-start'>
          <div className='mb-[15px] lg:mb-0 lg:mr-[140px]'>
            <p className='text-center text-[27px] lg:text-start lg:text-[49px]'>Не нужна подписка?</p>
            <p className='text-center text-[27px] lg:text-start lg:text-[49px]'>Выбери игру из каталога</p>
          </div>
          <div className='flex flex-col items-center gap-5 lg:flex-row'>
            <Button
              onClick={() => window.open('https://gamevizor.ru/catalog/')}
              classNames='!text-[12px] p-[19px] flex items-center lg:w-fit w-full justify-center'
              title='Смотреть каталог'
              variant='contained'
            />
            <div className='n flex gap-2'>
              <img
                className='w-[40px] cursor-pointer  transition duration-500 ease-in-out hover:scale-110'
                alt='next'
                src={nextButton.src}
                onClick={handlePrev}
              />
              <img
                className=' w-[40px] rotate-180 transform cursor-pointer transition duration-500 ease-in-out hover:scale-110'
                alt='next'
                src={nextButton.src}
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
        <Slider sliderRef={sliderRef} />
      </div>
    </div>
  )
}
