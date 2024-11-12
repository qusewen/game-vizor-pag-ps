'use client'

import { useRouter } from 'next/navigation'

import { ArrowButton, Button, CardDataLib } from 'shared/_ui'

import cross from '../../../../../public/assets/cross.png'

export const SubscribeCard = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center justify-center gap-[15px] lg:flex-row lg:gap-[40px]'>
      {CardDataLib.map(({ id, period, cost, background, type, buttonBg, text, monthColor, systemName }) => {
        return (
          <div
            key={id}
            style={{ backgroundImage: `url(${background})` }}
            className='relative flex w-[320px] flex-row gap-[18px] rounded-[20px] bg-cover bg-center p-4 px-0 pb-4 lg:flex-col lg:pb-[35px]'
          >
            <div className='flex flex-row items-center lg:block lg:flex-col lg:items-start'>
              <div>
                <img
                  className='ml-[-6px] w-[118px] lg:mb-[26px] lg:ml-0 lg:w-[330px]'
                  alt='cross'
                  src={cross.src}
                />
              </div>
              <div className='  lg:pl-[38px] '>
                <p
                  style={{ color: buttonBg }}
                  className='ml-[-2px] lg:ml-0 text-[24px] font-bold uppercase lg:text-[42px] lg:normal-case'
                >
                  {type}
                </p>
                <p
                  className='mb-[2px] mt-[-7px] text-[13px] lg:mb-[19px] lg:mt-[-16px]'
                  style={{ color: monthColor }}
                >
                  {period}
                </p>
                <p
                  style={{ color: buttonBg }}
                  className='text-[23px] font-bold lg:text-[30px]'
                >
                  {cost}
                </p>
              </div>
            </div>
            <Button
              onClick={() => router.push(`/order/${systemName}`)}
              classNames='!border-0 !text-[12px] mx-auto p-[19px]  items-center hover:scale-105 lg:flex hidden  w-[80%] justify-center'
              style={{ background: buttonBg, color: text, borderWidth: '0px' }}
              title='Оформить'
              variant='default'
            />
            <div
              className='absolute bottom-[15px] right-[20px] z-10 lg:hidden'
              onClick={() => router.push(`/order/${systemName}`)}
            >
              <ArrowButton color={buttonBg} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
