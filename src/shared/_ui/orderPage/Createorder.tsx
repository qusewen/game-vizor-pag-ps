'use client'

import { useFormikContext } from 'formik'
import { useParams } from 'next/navigation'
import { toast } from 'react-toastify'

import { Button, Input } from 'shared/_ui'
import { SubscribeCost } from 'shared/contants'

export const CreateOrder = () => {
  const { type } = useParams()
  const count = SubscribeCost[type]
  const discount = 0
  const formik = useFormikContext()

  const handleSave = async () => {
    formik.resetForm({})
    await toast.success('Заказ успешно оформлен')
    formik.setFieldValue('comment', '')
    formik.setFieldValue('is_agree', false)
    formik.setFieldValue('ps', 'default')
  }

  return (
    <div className='mx-auto h-fit  w-[88%] rounded-[20px] bg-[#F0EEEE] px-[15px] py-[20px] lg:w-[30%] '>
      <div className='mb-[20px] flex items-center justify-between'>
        <div className='font-semibold'>Итого:</div>
        <div className='font-semibold'>{count}₽</div>
      </div>
      <div className='mb-[5px] flex  items-center justify-between text-[12px] font-semibold'>
        <div>Товаров на сумму:</div>
        <div>{count}₽</div>
      </div>
      <div className='mb-[10px] flex items-center justify-between text-[12px] font-semibold'>
        <div>Ваша скидка:</div>
        <div>{discount}₽</div>
      </div>
      <Input
        value={formik.getFieldProps('code').value}
        onChange={(e) => formik.setFieldValue('code', e.target.value)}
        placeholder='Есть промокод?'
        className='mb-[10px]'
      />
      <Button
        title='Оформить заказ'
        variant='contained'
        classNames='w-full mb-[10px] !h-[35px] max-h-[35px] min-h-[35px] !text-[12px]'
        onClick={handleSave}
        disabled={!formik.isValid}
      />
      <p className='text-[9px]'>
        Нажимая на кнопку “Оформить заказ” - вы соглашаетесь сполитикой конфиденциальности в отношении обработки персональных данныхи политикой оферты
      </p>
    </div>
  )
}
