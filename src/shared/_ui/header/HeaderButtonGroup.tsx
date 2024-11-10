'use client'

import { Button } from 'shared/_ui'
import { ScrollFunctionLib } from 'shared/helper'

import { setIsOpenBurger } from '../../../store/commonReduser/actionReducer'
import { useAppDispatch } from '../../../store/store'

export const HeaderButtonGroup = () => {
  const dispatch = useAppDispatch()

  return (
    <div className='flex flex-col gap-2.5 lg:flex-row'>
      <Button
        title='Оформить подписку'
        variant='contained'
        onClick={() => {
          dispatch(setIsOpenBurger(false))
          ScrollFunctionLib(2)
        }}
      />
      <Button
        classNames='!border-white !text-white lg:!border-[#b74020] lg:!text-[#b74020]'
        title='Купить игру'
        variant='outlined'
        onClick={() => {
          dispatch(setIsOpenBurger(false))
          ScrollFunctionLib(1)
        }}
      />
    </div>
  )
}
