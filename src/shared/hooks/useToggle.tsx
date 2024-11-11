'use client'

import { useCallback, useState } from 'react'

export const useToggle = (initialValue: boolean = false) => {
    const [isOn, setIsOn] = useState(initialValue)

    const toggle = useCallback(() => setIsOn((v) => !v), [])

    const setOn = useCallback(() => setIsOn(true), [])

    const setOff = useCallback(() => setIsOn(false), [])

    return { isOn, toggle, setIsOn, setOn, setOff }
}