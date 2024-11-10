'use client'

import clsx from 'clsx'

import { PrioritiesData } from 'shared/_ui'
import { useAnimationInFirstRender } from 'shared/hooks'

import block5 from '../../../../../public/assets/block5.svg'

export const Priorities = () => {
  const isVisible = useAnimationInFirstRender()

  return (
    <div
      className={clsx(
        'container mx-auto  mt-[15px] !w-[360px] max-w-[360px] flex-wrap rounded-[20px] bg-opacity-50 py-2 text-white backdrop-blur-lg transition-opacity duration-1000 ease-in-out lg:mt-0 lg:flex  lg:!w-fit lg:max-w-[1100px] lg:px-4',
        { 'translate-x-[-100%] transform opacity-0': !isVisible },
        { 'opacity-1 translate-x-[0] transform': isVisible },
      )}
    >
      <div className='grid grid-cols-2 gap-5  lg:flex lg:flex-wrap lg:justify-between'>
        {PrioritiesData.map(({ icon, text, id }) => {
          return (
            <img
              alt={text}
              src={icon}
              key={id}
            />
          )
        })}
        <div className='flex items-center gap-3'>
          <img
            alt='техподдержка'
            src={block5.src}
          />
          <div className=' text-[13px] font-light '>
            <div className='leading-[16px]'>Техподдержка</div>
            <div>на сайте</div>
          </div>
        </div>
      </div>
    </div>
  )
}
