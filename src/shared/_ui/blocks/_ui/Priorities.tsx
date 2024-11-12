'use client'

import clsx from 'clsx'

import { PrioritiesData } from 'shared/_ui'
import { useAnimationInFirstRender } from 'shared/hooks'


export const Priorities = () => {
  const isVisible = useAnimationInFirstRender()
const indexWidth = {
    0: '100px',
    1: '110px',
    2: '110px',
    3: '',
  4:'100px',
  5:'100px',
}
const getWidth  = (index: number) => {
  // @ts-ignore
  return  indexWidth[index]
  }
  return (
    <div
      className={clsx(
        ' mx-auto  mt-[15px]  !w-[360px]   max-w-[360px] flex-wrap rounded-[20px] bg-opacity-50 py-2 px-0 text-white backdrop-blur-lg transition-opacity duration-1000 ease-in-out lg:mt-0 lg:flex  lg:!w-fit lg:max-w-[1100px] lg:px-1',
        { 'translate-x-[-100%] transform opacity-0': !isVisible },
        { 'opacity-1 translate-x-[0] transform': isVisible },
      )}
    >
      <div className='grid grid-cols-2 lg:gap-3 gap-2  lg:flex lg:flex-wrap  lg:justify-between'>
        {PrioritiesData.map(({ icon, text, id }, index) => {

          return (
              <div key={id} className='grid-cols-[35px_1fr] grid items-center gap-2' >
                <div><img
                    alt={text}
                    src={icon}
                /></div>

                  <div style={{width: getWidth(index)}} className='text-[12px] w-[140px] font-semibold'>
                    {text}
                  </div>
              </div>
          )
        })}
      </div>
    </div>
  )
}
