'use client'

import { useFormikContext } from 'formik'

import { Input } from 'shared/_ui'

export const Offerts = () => {
  const formik = useFormikContext()

  return (
    <div className='flex  items-center gap-2 text-[10px]'>
      <Input
        checked={formik.getFieldProps('is_agree').value}
        onChange={(e) => formik.setFieldValue('is_agree', e.target.checked)}
        placeholder='checkbox'
        type='checkbox'
        className='custom-checkbox relative w-[12px]'
      />
      <p className='w-[90%] lg:w-full'>
        <span>Я соглашаюсь с </span>
        <span
          className='cursor-pointer underline transition duration-500 ease-in-out hover:text-[#D95637]'
          onClick={() => window.open('https://gamevizor.ru/confidential/')}
        >
          политикой конфиденциальности в отношении обработки персональных данных
        </span>
        <span> и </span>
        <span
          className='cursor-pointer underline transition duration-500 ease-in-out hover:text-[#D95637]'
          onClick={() => window.open('https://gamevizor.ru/offer/')}
        >
          политикой оферты
        </span>
      </p>
    </div>
  )
}
