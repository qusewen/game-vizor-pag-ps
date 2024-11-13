'use client'

import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'

import { Input, Offerts, PsPicker } from 'shared/_ui'

import { useFormikContext } from 'formik'


export const OrderPerson = () => {
  const formik = useFormikContext()

  return (
    <div className='mx-auto w-[88%] rounded-[20px] bg-[#F0EEEE] px-[15px] py-[25px] lg:w-[70%]'>
      <div className=' font-medium'>Покупатель</div>
      <div className=' mb-[20px] mt-[15px] h-[1px] w-full bg-gradient-to-r from-transparent via-[#E27F69]/50 to-[#E27F69]' />
      <div className='flex flex-col gap-[10px]'>
        <div className='flex flex-col gap-[10px] lg:flex-row'>
          <Input
            value={formik.getFieldProps('name').value}
            onChange={(e) => formik.setFieldValue('name', e.target.value)}
            placeholder='Имя'
            className='w-[60%]'
            disabled={formik.getFieldProps("disabled").value}
          />
          <PhoneInput
            {...formik.getFieldProps('phone_number')}
            onChange={(value) => formik.setFieldValue('phone_number', value)}
            containerClass='w-full] lg:w-[280px]'
            onlyCountries={['ru']}
            country='ru'
            disableDropdown
            buttonClass='!rounded-[5px]   border-l border-t border-b !border-r-0 !bg-[#E7E7E7] outline-0 '
            inputClass='!rounded-[5px] !w-[100%] lg:!w-[280px]  border border-[#CCCDCD] !bg-[#E7E7E7]  outline-0'
            disabled={formik.getFieldProps("disabled").value}
          />
        </div>
        <div className='flex flex-col justify-between gap-[10px] lg:flex-row'>
          <Input
            value={formik.getFieldProps('email').value}
            onChange={(e) => formik.setFieldValue('email', e.target.value)}
            placeholder='email'
            disabled={formik.getFieldProps("disabled").value}
          />
          <PsPicker />
        </div>
        <div className='mt-[10px]'>
          <textarea
            value={formik.getFieldProps('comment').value}
            onChange={(e) => formik.setFieldValue('comment', e.target.value)}
            placeholder='Комментарии к заказу'
            className='h-[130px] w-full resize-none rounded-[5px] border border-[#CCCDCD] bg-[#E7E7E7] pl-2 text-[14px] outline-0'
            disabled={formik.getFieldProps("disabled").value}
          />
        </div>
        <Offerts />
      </div>
    </div>
  )
}
