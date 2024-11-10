'use client'

import clsx from 'clsx'
import { Bebas_Neue } from 'next/font/google'
import { useRouter } from 'next/navigation'

import { HeaderButtonGroup, Logo } from 'shared/_ui'
import { setIsOpenBurger } from 'store/commonReduser/actionReducer'
import { isOpenBurgerSelector } from 'store/commonReduser/actionReducer/selector.action'
import { useAppDispatch, useAppSelector } from 'store/store'

import TgIcon from '../../../../public/assets/tg.svg'
import YouTube from '../../../../public/assets/youtube.svg'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})
export const Header = () => {
  const dispatch = useAppDispatch()
  const isBurgerOpen = useAppSelector(isOpenBurgerSelector)
  const router = useRouter()
  return (
    <header>
      <div className='container mx-auto flex h-[42px] items-center justify-between bg-transparent px-2 lg:max-w-[1100px] lg:gap-[131px] lg:bg-white lg:p-0'>
        <div
          className='hidden cursor-pointer items-center gap-2 uppercase lg:flex'
          onClick={() => router.push('/')}
        >
          <div className='rounded-full bg-black p-2'>
            <Logo />
          </div>
          <h1 className={`${bebasNeue.className} text-[20px] font-medium tracking-wider text-black`}>gamevizor</h1>
        </div>
        <div className='hidden items-center lg:flex lg:gap-[75px]'>
          <nav>
            <ul className='flex items-center tracking-tighter lg:gap-[20px]	'>
              <li
                className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
                onClick={() => window.open('https://gamevizor.ru/catalog/')}
              >
                Каталог
              </li>
              <li
                className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
                onClick={() => window.open('https://gamevizor.ru/catalog_subscriptions/')}
              >
                Подписки
              </li>
              <li
                className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
                onClick={() => window.open('https://gamevizor.ru/catalog_currency/')}
              >
                Донат
              </li>
              <li
                className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
                onClick={() => window.open('https://gamevizor.ru/replenishment/')}
              >
                Пополнения
              </li>
              <li
                className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
                onClick={() => window.open('https://gamevizor.ru/sales/')}
              >
                Акции
              </li>
            </ul>
          </nav>

          <div className='flex lg:gap-[20px] '>
            <div className='flex items-center gap-4'>
              <img
                className='cursor-pointer'
                onClick={() => window.open('https://t.me/gamevizor', '_blank')}
                alt='tg'
                src={TgIcon.src}
                width={20}
                height={20}
              />
              <img
                className='cursor-pointer'
                onClick={() => window.open('https://www.youtube.com/@GAME_VIZOR', '_blank')}
                alt='youtube'
                src={YouTube.src}
                width={20}
                height={20}
              />
            </div>
            <HeaderButtonGroup className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]' />
          </div>
        </div>
        <div
          className={clsx('z-20 ml-2 mt-2 flex  flex-col gap-1 rounded-full bg-white p-2 lg:hidden', {})}
          onClick={() => dispatch(setIsOpenBurger(!isBurgerOpen))}
        >
          <div className='h-[2px] w-[15px] bg-black' />
          <div className='h-[2px] w-[15px] bg-black' />
          <div className='h-[2px] w-[15px] bg-black' />
        </div>
      </div>
    </header>
  )
}
