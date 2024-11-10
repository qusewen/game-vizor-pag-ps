import { HowIstWorkBlockLib, InfoBlock, Button } from 'shared/_ui'
import { ScrollFunctionLib } from 'shared/helper'

import cross from '../../../../../public/assets/cross.png'

export const HowItsWorkBlock = () => {
  return (
    <div className='bg-[#D4DEEE] px-2 py-[25px] lg:py-[75px]'>
      <div className='container relative mx-auto max-w-[1100px] '>
        <div className='mb-[42px] flex items-center justify-center lg:justify-between'>
          <p className='text-center text-[27px] lg:text-left lg:text-[45px]'>Как это работает?</p>
          <div className='absolute left-[40%] top-[-57px] hidden lg:block'>
            <img
              className=' w-[300px]'
              alt='cros'
              src={cross.src}
            />
          </div>
          <Button
            onClick={() => ScrollFunctionLib(2)}
            classNames='!text-[12px] lg:flex p-[19px] hidden items-center lg:w-fit w-full justify-center'
            title='Оформить подписку'
            variant='contained'
          />
        </div>
        <div className='flex flex-col justify-between gap-3 lg:flex-row lg:gap-0'>
          {HowIstWorkBlockLib.map(({ id, text, subText, index }) => {
            return (
              <InfoBlock
                key={id}
                index={index}
                text={text}
                subText={subText}
              />
            )
          })}
        </div>
        <Button
          onClick={() => ScrollFunctionLib(2)}
          classNames='!text-[12px] lg:hidden p-[19px] flex items-center lg:w-fit w-full justify-center mt-[25px]'
          title='Оформить подписку'
          variant='contained'
        />
      </div>
    </div>
  )
}
