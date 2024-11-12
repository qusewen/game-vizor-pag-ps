'use client'

import { Bebas_Neue } from 'next/font/google'
import { useRouter } from 'next/navigation'

import { Logo } from 'shared/_ui'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export const Footer = () => {
  const router = useRouter()
  return (
    <footer className='bg-[#002D90]'>
      <div className='container mx-auto flex max-w-[1100px] flex-col flex-wrap items-center justify-between py-[25px] text-[14px] text-white lg:flex-row'>
        <div className='text-center lg:text-left'>
          <p className='opacity-60'>Индивидуальный предприниматель</p>
          <p className='opacity-60'>Шаров Олег Константинович</p>
          <p className='opacity-60'>ИНН: 911116321630</p>
        </div>
        <div className='text-center lg:text-left'>
          <a
            href='mailto:support@gamevizor.ru'
            className='my-[20px] text-[25px] lg:hidden'
          >
            support@gamevizor.ru
          </a>
          <p className='opacity-60' onClick={()=> window.open('https://gamevizor.ru/confidential/')}>Политика конфиденциальности</p>
          <p className='opacity-60' onClick={()=> window.open('https://gamevizor.ru/offer/')}>Публичная оферта</p>
          <p className='opacity-60' onClick={()=> window.open('https://gamevizor.ru')}>Согласие на рекламную рассылку</p>
        </div>
        <div className='text-center lg:text-left'>
          <a
            href='mailto:support@gamevizor.ru'
            className='hidden  lg:block'
          >
            support@gamevizor.ru
          </a>
          <div
            className='my-[15px] flex cursor-pointer items-center gap-2 uppercase lg:hidden'
            onClick={() => router.push('/')}
          >
            <div className='rounded-full bg-black p-2'>
              <Logo />
            </div>
            <h2 className={`${bebasNeue.className} text-[20px] font-medium tracking-wider text-white`}>gamevizor</h2>
          </div>
          <p className='opacity-60'>Работаем 24/7</p>
          <p className='opacity-60'>Сотрудничество</p>
        </div>
        <div
          className='hidden cursor-pointer items-center gap-2 uppercase lg:flex'
          onClick={() => router.push('/')}
        >
          <div className='rounded-full bg-black p-2'>
            <Logo />
          </div>
          <h2 className={`${bebasNeue.className} text-[20px] font-medium tracking-wider text-white`}>gamevizor</h2>
        </div>
      </div>
    </footer>
  )
}
