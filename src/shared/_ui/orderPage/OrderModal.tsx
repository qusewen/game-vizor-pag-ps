'use client'

import {Button} from "shared/_ui";
import {useGetStatusOrderQuery} from "shared/api/order/order";
import {useEffect} from "react";
import wait from '../../../../public/assets/payment.svg'
import good from '../../../../public/assets/good.png'
interface IProps{
    url: Undefinable<string>
    id: string
}
export const OrderModal = ({ url, id }:IProps) => {
    const {data, refetch} = useGetStatusOrderQuery({id: +id! }, {skip: !id})
    const status = data?.data.status
    const chatId = data?.data.chat
    useEffect(()=> {
       const intervalId = setInterval(async () => {
            refetch()
        },5000)
            window.open(`${url}`)
           return () =>  clearInterval(intervalId)
    },[url])

    return (
        <div className='absolute bg-[#F0EEEE] rounded-[20px] p-[20px] py-[40px] z-[50] top-[30%] left-[35%]'>

            {status === 'WAITING' || !data && (
                <img
                    alt='wait'
                    src={wait.src}
                    className='mb-[30px] mx-auto w-[90px] h-[90px]'
                />
            )}
            {status === 'ACCEPT' &&  (
                <img
                    alt='good'
                    src={good.src}
                    className='mb-[30px] w-[90px] h-[90px]'
                />
            )}
            {status === 'WAITING' || !data && (
                <div className='uppercase text-center mb-[10px] text-[27px]'>
                    <div>Спасибо, ваш</div>
                    <div>Заказ ждет оплаты</div>
                </div>
            )}
            {status === 'WAITING' || !data && (
                <div className='text-center mb-[30px] text-[12px]'>
                    <div>Дождитесь автоматического перехода на</div>
                    <div>страницу оплаты или нажмите на кнопку</div>
                </div>
            )}
            {status === 'ACCEPT' && (
                <div className='uppercase text-center text-[27px] mb-[10px]'>
                    <div>Спасибо, ваш</div>
                    <div>Заказ оформлен</div>
                </div>
            )}
            {status === 'ACCEPT' && (
                <div className='text-center text-[12px] mb-[30px]'>
                    <div>Перейдите в чат для дальнейшего</div>
                    <div>оформления подписки</div>
                </div>
            )}
            <Button
                title={status === 'ACCEPT' ? 'Перейти в чат' : 'Оплатить'}
                variant='contained'
                classNames='w-full mb-[10px] !h-[35px] max-h-[35px] min-h-[35px] !text-[12px]'
                onClick={() => {
                    if (status === 'WAITING') window.open(`${url}`);
                    if (status === 'ACCEPT') window.open(`https://gamevizor.ru/profile/chats/${chatId}`);
                }}
            />
        </div>

    )
}