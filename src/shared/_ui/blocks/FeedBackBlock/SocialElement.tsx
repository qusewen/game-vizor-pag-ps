import { Button } from 'shared/_ui'

import youtube from '../../../../../public/assets/tgWhite.svg'
import tg from '../../../../../public/assets/youtubeWhite.svg'

export const SocialElement = () => {
  return (
    <div className='w-full rounded-[20px] bg-[#001747] bg-opacity-50 px-[30px]  pb-[20px] pt-[25px] text-white backdrop-blur-lg lg:p-[30px] lg:pb-[40px] lg:pr-[50px] lg:pt-[25px]'>
      <div className='text-center text-[22px] lg:text-left'>Подпишись на наши соц. сети</div>
      <div className='mb-[20px] text-center text-[10px] text-gray-400 lg:mb-[40px] lg:text-left'>Новости и юмор уже ждут тебя на канале!</div>
      <div className='flex items-center gap-3'>
        <Button
          onClick={() => window.open('https://t.me/gamevizor', '_blank')}
          title='Telegram'
          variant='contained'
          classNames='!border-0 !text-[12px] lg:mt-0 gap-3  p-[19px] px-[35px] flex items-center justify-center mt-4'
        >
          <img
            alt='Youtube'
            src={youtube.src}
          />
        </Button>
        <Button
          onClick={() => window.open('https://www.youtube.com/@GAME_VIZOR', '_blank')}
          title='Youtube'
          variant='contained'
          classNames='!border-0 !text-[12px] lg:mt-0 gap-3  p-[19px] px-[35px] flex items-center justify-center mt-4'
        >
          <img
            alt='tg'
            src={tg.src}
          />
        </Button>
      </div>
    </div>
  )
}
