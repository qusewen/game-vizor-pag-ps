import { SubscribeCard } from 'shared/_ui'

import flag from '../../../../../public/assets/flag.png'

export const SubscribeBlock = () => {
  return (
    <div id='subscribe'>
      <div className='container mx-auto max-w-[1100px] py-[25px] lg:py-[48px]'>
        <div className='mb-[29px] flex items-center justify-center gap-3 lg:flex-row'>
          <img
            className='hidden w-[50px] lg:block'
            src={flag.src}
            alt='flag'
          />
          <p className='text-center text-[23px] lg:text-left lg:text-[51px]'>Подписка на русском</p>
          <img
            className=' block w-[50px] lg:hidden'
            src={flag.src}
            alt='flag'
          />
        </div>
        <SubscribeCard />
      </div>
    </div>
  )
}
