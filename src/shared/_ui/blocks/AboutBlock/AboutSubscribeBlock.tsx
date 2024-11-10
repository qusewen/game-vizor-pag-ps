import { AboutDataLib } from 'shared/_ui'

export const AboutSubscribeBlock = () => {
  return (
    <div
      className='bg-[#F0EEEE]'
      id='about'
    >
      <div className='container mx-auto max-w-[1100px] py-[25px] lg:py-[42px]'>
        <div className='mb-[25px] lg:mb-[44px]'>
          <p className='text-center text-[27px] lg:text-[46px]'>Что входит в подписку:</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-0'>
          {AboutDataLib.map(({ id, icon }) => {
            return (
              <img
                alt='about'
                key={id}
                src={icon}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
