'use client'

import clsx from 'clsx'

import { Priorities, Button } from 'shared/_ui'
import { ScrollFunctionLib } from 'shared/helper'
import { useAnimationInFirstRender } from 'shared/hooks'

import bg1 from '../../../../public/assets/bg1.png'
import clock from '../../../../public/assets/clock.svg'
import flag from '../../../../public/assets/flag.png'
import gamePad from '../../../../public/assets/gamepad.png'

export const SubBlock = () => {
  const isVisible = useAnimationInFirstRender()

  return (
    <div style={{ backgroundImage: `url(${bg1.src})`, paddingBottom: '25px', backgroundPosition: '10px 41%' }}>
      <div className='container mx-auto mt-[-42px] flex max-w-[1100px] flex-wrap justify-center pt-[50px] text-white lg:mt-0 lg:h-[520px] lg:justify-between lg:pt-[127px]'>
        <div className={clsx('transition-opacity duration-1000 ease-in-out', { 'opacity-0': !isVisible }, { 'opacity-100': isVisible })}>
          <p className='text-center text-[27px] font-medium lg:text-left lg:text-[46px]'>Оформить подписку</p>
          <p className='pt-[-14px] text-center text-[27px] font-medium leading-10 lg:text-left lg:text-[46px]'>Playstation Plus</p>
          <div className='mb-[44px] flex flex-col gap-[30px] text-center text-[27px] lg:mt-[16px] lg:flex-row lg:text-left lg:text-[38px]'>
            на русском языке
            <img
              className='hidden h-[50px] w-[50px] lg:block'
              alt='flag'
              src={flag.src}
            />
          </div>
          <div className='flex w-full flex-col items-center gap-3 lg:flex-row '>
            <Button
              classNames='!text-[12px] p-[19px] flex items-center lg:w-fit w-full justify-center'
              title='Оформить подписку'
              variant='contained'
              onClick={() => ScrollFunctionLib(2)}
            />
            <Button
              classNames='!text-[12px] p-[19px] flex items-center w-full lg:w-[145px] justify-center'
              title='Купить игру'
              variant='default'
              onClick={() => ScrollFunctionLib(1)}
            />
          </div>
        </div>
        <div className='relative'>
          <img
            className={clsx(
              'mt-[35px] w-[320px] transform transition-opacity duration-1000 ease-in-out lg:mt-[-18px] lg:w-[510px] lg:rotate-[-15deg]',
              { 'opacity-0': !isVisible },
              { 'opacity-100': isVisible },
            )}
            alt='gamepad'
            src={gamePad.src}
          />
          <div>
            <div
              style={{ background: '#b74020' }}
              className={clsx(
                'hover:animate-wiggle absolute  right-[7px] top-[169px] flex items-center gap-[7px]  rounded-[20px] py-[10px] pl-[17px] pr-[25px] transition-opacity duration-1000 ease-in-out',
                { 'opacity-0': !isVisible },
                { 'opacity-100': isVisible },
              )}
            >
              <div>
                <img
                  alt='clock'
                  src={clock.src}
                />
              </div>
              <div>
                <p className='text-[14px] uppercase'>подключение</p>
                <div className='flex gap-2'>
                  <p className='text-[23px] leading-5'>за</p>
                  <p className='text-[23px] font-bold leading-5'>5 МИН.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Priorities />
    </div>
  )
}
