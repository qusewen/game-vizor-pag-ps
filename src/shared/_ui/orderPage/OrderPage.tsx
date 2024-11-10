'use client'

import { Formik } from 'formik'
import { useParams } from 'next/navigation'

import { CreateOrder, orderInitialState, OrderPerson, ValidationScheme } from 'shared/_ui'

export const OrderPage = () => {
  const { type } = useParams()
  return (
    <div className='container mx-auto max-w-[1100px] flex-grow py-[30px]'>
      <div className='mb-[30px] flex flex-col items-center justify-between text-center lg:flex-row lg:text-left'>
        <div className='text-center  text-[27px] font-medium lg:text-left lg:text-[41px]'>Оформление заказа</div>
        <div className='text-center  text-[27px] font-medium uppercase lg:text-left lg:text-[41px]'>{type}</div>
      </div>
      <div className='flex flex-col gap-[10px] lg:flex-row lg:gap-[20px]'>
        <Formik
          validateOnMount
          isInitialValid={false}
          validate={ValidationScheme}
          initialValues={orderInitialState}
          onSubmit={() => {}}
          enableReinitialize
        >
          {() => {
            return (
              <>
                <OrderPerson />
                <CreateOrder />
              </>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}
