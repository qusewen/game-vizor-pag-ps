'use client'

import { useEffect, useState } from 'react'

export const useAnimationInFirstRender = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])
  return isVisible
}
