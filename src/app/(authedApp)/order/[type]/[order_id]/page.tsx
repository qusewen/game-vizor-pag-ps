'use client'

import {useToggle} from "shared/hooks";
import {useParams, useRouter} from "next/navigation";
import {useAppSelector} from "store/store";
import {orderUrlSelector} from "store/commonReduser/actionReducer/selector.action";
import {OrderModal, OrderPage, Subjects} from "shared/_ui";
import {useEffect} from "react";

const OrderPageById = () => {
    const {setOn, isOn, setOff}= useToggle()
    const {order_id, type} = useParams()
    const router = useRouter()

    const orderUrl = useAppSelector(orderUrlSelector)

    useEffect(() => {
        console.log(orderUrl)
    })

    useEffect(()=> {
        setOn()
    }, [])

    if(!order_id) router.push(`${type}`)

    return <>
        <Subjects />
        <OrderPage />
        {isOn && <OrderModal url={orderUrl} id={order_id as string} />}
        {isOn && <div
            className='z-40 w-full h-full fixed top-0 left-0 bg-[#474747ba]'
            onClick={(e) => {
                router.back();
                e.stopPropagation()
                e.preventDefault()
            }}
        />}
    </>
}

export default OrderPageById
