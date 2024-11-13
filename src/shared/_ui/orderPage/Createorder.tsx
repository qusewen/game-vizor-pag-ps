'use client'

import { FormikValues, useFormikContext } from 'formik'
import { useParams, useRouter } from 'next/navigation'

import { Button, Input } from 'shared/_ui'
import { SubscribeCost } from 'shared/contants'
import { useCreateOrderMutation, useCreateUserMutation, useGetAccessTokenMutation, useGetOrdersQuery, useGetPromocodeQuery } from "shared/api/order/order";
import { useAppDispatch } from "store/store";
import { setOrderUrl } from "store/commonReduser/actionReducer";
import { toast } from "react-toastify";
import { useEffect, useState } from 'react'

export const CreateOrder = () => {
  const { type } = useParams()
  const dispatch = useAppDispatch()
  const router = useRouter()
  // @ts-ignore
  const count = SubscribeCost[type]
  const discount = 0
  const formik = useFormikContext()


  const { data } = useGetOrdersQuery() // поулчение всех подписок с бека
  const [create] = useCreateUserMutation()
  const [createOrder] = useCreateOrderMutation()
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}`)
    if (parts.length === 2) return parts.pop()?.split(';').shift()

  }
  const [objPromocode, setObjPromocode] = useState();
  const { refetch } = useGetPromocodeQuery({ title: formik.values.code, type: "SUBSCRIPTION", id: 1 })
  const { access_refresh } = useGetAccessTokenMutation()
  const [isUsePromocode, setIsUsePromocode] = useState(false);
  useEffect(() => {
    const request = async () => {
      if (formik.values.code === "") return;
      // Если токен есть, запрос на получение данных пользователя
      const data = await refetch()
      console.log(data)
      if (data?.data) {
        setObjPromocode(2)
        console.log(true)
        setIsUsePromocode(true)
      }
    }

    request()
  }, [formik.values.code])


  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  const onCreateOrder = (token) => {
    const formikValues = formik.values as FormikValues
    const dto = {
      id: formikValues.id,
      promocode: formikValues.code,
      comments_for_order: formikValues.comment,
      platform_id: (formikValues.ps === 'PlayStation 4' ? 1 : 2),
      type: 'SUBSCRIPTION',
    }

    createOrder({data: dto, token: token}).then((res) => {

      // @ts-ignore
      if (!res.data.order_id) {
        toast.error('Ошибка создания order')
      } else {
        router.push(`${type}/${res.data.order_id}`)
        // @ts-ignore
        dispatch(setOrderUrl(res.data.url))
      }

    }).catch(() => {
      toast.error('Ошибка создания заказа')
    })

  }

  const checkUser = async () => {
    const refresh = getCookie('refresh_token') || getCookie('access_token')
    if (refresh && refresh !== 'undefined') onCreateOrder(null)
    if (!refresh || refresh === 'undefined') {
      const formikValues = formik.values as FormikValues
      const dto = { username: formikValues.name, phone_number: '+' + formikValues.phone_number, email: formikValues.email }
      await create(dto).then((res) => {
        console.log(res.data.token)
        onCreateOrder(res.data.token)
      }).catch(() => {
        toast.error('Ошибка создания')
      })
    }
  }

  const handleSave = async () => {
    checkUser()
  }

  console.log(formik.isValid)
  useEffect(() => {
    const request = async () => {
      console.log("TETRETETE")
      await access_refresh()
    }

    request()
  })

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
      <div style={{position: "relative"}}>
        <Input
          value={formik.getFieldProps('code').value}
          onChange={(e) => formik.setFieldValue('code', e.target.value)}
          placeholder='Есть промокод?'
          className='mb-[10px]'
          disabled={isUsePromocode}
        />
        {isUsePromocode ? <div style={{position: "absolute", left: "60%", top: "15%"}}>Применен</div> : null}
      </div>
      <Button
        key={`${!formik.isValid}`}
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
