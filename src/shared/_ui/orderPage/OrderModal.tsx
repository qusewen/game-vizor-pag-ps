'use client'

import { Button, CardDataLib } from "shared/_ui";
import { useGetAccessTokenMutation, useGetStatusOrderQuery } from "shared/api/order/order";
import ym from 'react-yandex-metrika';
import { useEffect, useState } from "react";
import wait from '../../../../public/assets/payment.svg'
import good from '../../../../public/assets/good.png'
import { useParams } from "next/navigation";
interface IProps {
    url: Undefinable<string>
    id: string,
    type: string;
    cost: number;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const OrderModal = ({ url, id , type, cost}: IProps) => {
    const [accessToken, setAccessToken] = useState(null)
    const { subscriptionType, orderId } = useParams();

    // Состояние для хранения типа подписки
    const [subscription, setSubscription] = useState(null);

    const { data, refetch } = useGetStatusOrderQuery({ id: +id!, token: accessToken }, { skip: !id })
    const [get_access_token] = useGetAccessTokenMutation()
    const [Url, setUrl] = useState(data?.url)
    const status = data?.status
    const chatId = data?.chat

    const getAccess = async () => {
        const response = await get_access_token()
        if (response?.data?.access) setAccessToken(response?.data?.access)
    }

    useEffect(() => {
        setUrl(data?.url)

        if (data?.status === "ACCEPT") {
            const index = CardDataLib.findIndex(card => card.type === capitalizeFirstLetter(type));
            if (type == "essential") {
                ym('reachGoal', 'ORDER_DELUXE', {order_price: CardDataLib[index].cost.replace('₽', '.00'), currency: 'RUB'});
                
            }

            if (type == "extra") {
                ym('reachGoal', 'ORDER_EXTRA', {order_price: CardDataLib[index].cost.replace('₽', '.00'), currency: 'RUB'});
            }

            if (type == "essential") {
                ym('reachGoal', 'ORDER_ESSENTIAL', {order_price: CardDataLib[index].cost.replace('₽', '.00'), currency: 'RUB'});
            }
        }
    }, [data])

    useEffect(() => {
        if (!Url) return
        window.open(Url)
    }, [Url])

    useEffect(() => {
        getAccess()

        const intervalId = setInterval(async () => {
            getAccess()

        }, 1000 * 60 * 4)
        return () => clearInterval(intervalId)

    }, [url])

    useEffect(() => {
        const intervalId = setInterval(async () => {
            refetch()
        }, 5000)
        //window.open(`${url}`)
        return () => clearInterval(intervalId)
    }, [url])

    return (
        <div className='absolute bg-[#F0EEEE] rounded-[20px] p-[20px] py-[40px] z-[50] top-[30%] left-[35%]'>
            {status === 'WAITING' && (
                <img
                    alt='wait'
                    src={wait.src}
                    className='mb-[30px] mx-auto w-[90px] h-[90px]'
                />
            )}
            {status === 'ACCEPT' && (
                <img
                    alt='good'
                    src={good.src}
                    className='mb-[30px] mx-auto w-[90px] h-[90px]'
                />
            )}
            {status === 'WAITING' && (
                <div className='uppercase text-center mb-[10px] text-[27px]'>
                    <div>Спасибо, ваш</div>
                    <div>Заказ ждет оплаты</div>
                </div>
            )}
            {status === 'WAITING' && (
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