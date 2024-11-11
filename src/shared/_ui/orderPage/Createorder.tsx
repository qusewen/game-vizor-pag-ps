'use client'

import {FormikValues, useFormikContext} from 'formik'
import {useParams, useRouter} from 'next/navigation'

import { Button, Input } from 'shared/_ui'
import { SubscribeCost } from 'shared/contants'
import {useCreateOrderMutation, useCreateUserMutation, useGetOrdersQuery} from "shared/api/order/order";
import {useAppDispatch} from "store/store";
import {setOrderUrl} from "store/commonReduser/actionReducer";
import {toast} from "react-toastify";

export const CreateOrder = () => {
  const { type } = useParams()
  const dispatch = useAppDispatch()
  const router = useRouter()
    // @ts-ignore
  const count = SubscribeCost[type]
  const discount = 0
  const formik = useFormikContext()


    const {data} = useGetOrdersQuery() // поулчение всех подписок с бека
    const [create] = useCreateUserMutation()
    const [createOrder] = useCreateOrderMutation()
    const getCookie = (name: string) => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}`)
        if(parts.length === 2) return parts.pop()?.split(';').shift()

    }

     const  setCookie =(name: string, value: string, days: number) => { const date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

        const onCreateOrder = () => {
                const formikValues = formik.values as FormikValues
                const dto = {
                    id: formikValues.id,
                    promocode:formikValues.code,
                    comments_for_order: formikValues.comment,
                    platform_id: (formikValues.ps === 'PlayStation 4'? 1 : 2),
                    type: 'subscription',
                }

            createOrder(dto).then((res)=> {
                // @ts-ignore
                dispatch(setOrderUrl(res.url))
                // @ts-ignore
                router.push(`${res.id}`)
            }).catch(()=>{
                toast.error('Ошибка создания заказа')
            })

        }

    const checkUser = async () => {
        const refresh = getCookie('refresh_token') || getCookie('access_token')
        if(refresh) onCreateOrder()
        if(!refresh) {
            const formikValues = formik.values as FormikValues
            const dto = {username: formikValues.name, phone_number: '+' + formikValues.phone_number,email: formikValues.email}
           await create(dto).then((res)=> {
               setCookie('access_token', res?.data?.token, 1)
               onCreateOrder()
           }).catch((error)=> {
               toast.error('Пользователь существует')
           })
        }
    }

  const handleSave = async () => {
      checkUser()

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
