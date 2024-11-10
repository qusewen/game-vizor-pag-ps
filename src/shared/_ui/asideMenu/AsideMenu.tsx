'use client'

import { setIsOpenBurger } from 'store/commonReduser/actionReducer'
import { isOpenBurgerSelector } from 'store/commonReduser/actionReducer/selector.action'
import { useAppDispatch, useAppSelector } from 'store/store'

import type { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}
export const AsideMenu = ({ children }: IProps) => {
  const dispatch = useAppDispatch()
  const isBurgerOpen = useAppSelector(isOpenBurgerSelector)

  return (
    <div className='relative'>
      {isBurgerOpen && (
        <div
          className='fixed inset-0 z-40 bg-black bg-opacity-50'
          onClick={() => dispatch(setIsOpenBurger(false))}
        />
      )}

      <div
        id='burger-menu'
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-blue-900 text-white transition-transform duration-300 ease-in-out ${
          isBurgerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex justify-end p-4'>
          <button
            type='button'
            onClick={() => dispatch(setIsOpenBurger(false))}
            className='text-white hover:text-gray-300 focus:outline-none'
            aria-label='Close menu'
          >
            X
          </button>
        </div>
        <div className='p-[15px]'>{children}</div>
      </div>
    </div>
  )
}
