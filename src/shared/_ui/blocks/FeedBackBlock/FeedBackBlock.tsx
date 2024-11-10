import { Button, SocialElement, SubscribeElement } from 'shared/_ui'

import feedbackBg from '../../../../../public/assets/feedbackbg.png'

export const FeedBackBlock = () => {
  return (
    <div className='bg-[#002D90]'>
      <div className='container relative mx-auto max-w-[1100px] px-4 py-[50px]  lg:px-0'>
        <div
          style={{ background: `url(${feedbackBg.src})` }}
          className='mb-[25px] h-[180px] max-w-[1100px] rounded-[20px] !bg-[25%]  bg-no-repeat lg:h-[219px] lg:!bg-cover lg:!bg-center'
        >
          <div className='pl-[15px] pt-[15px] lg:pl-[50px] lg:pt-[35px]'>
            <p className='text-[23px] font-medium lg:text-[27px] '>Что говорят о нас</p>
            <p className='mb-[40px] text-[12px] text-gray-400'>Актуальные отзывы клиентов</p>
            <Button
              onClick={() => window.open('https://gamevizor.ru/all_feedbacks/')}
              title='Читать отзывы'
              variant='contained'
              classNames='!bg-[#002D90] !border-0 !text-[12px] lg:mt-0   p-[19px] px-[35px] flex items-center justify-center mt-4'
            />
          </div>
        </div>
        <div className='flex flex-col gap-[20px] lg:grid lg:grid-cols-2'>
          <SubscribeElement />
          <SocialElement />
        </div>
        <span className='absolute bottom-0 left-0 h-px w-full bg-gray-300 opacity-50' />
      </div>
    </div>
  )
}
