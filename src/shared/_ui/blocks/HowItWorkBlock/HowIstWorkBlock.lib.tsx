import { ScrollFunctionLib } from 'shared/helper'

export const HowIstWorkBlockLib = [
  {
    id: 1,
    index: 1,
      text: <div className='flex flex-col'>
          <span>Выбери подписку | игру</span>
          <span>и оплати ее на сайте</span>
      </div>,
    subText: (
      <div>
        Преимущества и различия тарифов описаны в
        <span
          className='cursor-pointer px-[2px] text-[#b74020] underline'
          onClick={() => ScrollFunctionLib(3)}
        >
          таблице
        </span>
        ниже
      </div>
    ),
  },
  {
    id: 2,
    index: 2,
    text: (
      <div className='flex flex-col '>
        <span>После оплаты перейдите </span>
        <span>
          <span
            className='cursor-pointer pr-[4px] text-[#b74020] underline'
            onClick={() => window.open('https://gamevizor.ru/')}
          >
            в чат на нашем
          </span>
          сайте
        </span>
        <span>и дождитесь ответа оператора</span>
      </div>
    ),
    subText: (
      <div className='flex flex-col'>
        <span>Подключим подписку в течении 5 минут</span>
        <span>
          с момента твоего обращения в
          <span
            className='cursor-pointer pl-1 text-[#b74020] underline'
            onClick={() => window.open('https://gamevizor.ru/')}
          >
            чат
          </span>
        </span>
      </div>
    ),
  },
  {
    id: 3,
    index: 3,
    text: (
      <div className='flex flex-col'>
        <span>Наслаждайся любимыми </span>
        <span>играми онлайн и офлайн</span>
      </div>
    ),
    subText: (
      <div className='flex flex-col'>
        <span>В случае проблем обратитесь</span>
        <span>к оператору на сайте и вам</span>
        <span> незамедлительно помогут</span>
      </div>
    ),
  },
]
