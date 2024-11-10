'use client'

import clsx from 'clsx'

import { variantClassName } from 'shared/_ui/Button/Button.lib'

import type { ClassName } from 'postcss-selector-parser'
import type { CSSProperties, ReactNode } from 'react'
import type { EButtonVariant } from 'shared/interfaces'

interface IProps {
  title: string
  variant: Undefinable<EButtonVariant>
  onClick?: () => void
  style?: CSSProperties
  classNames?: ClassName
  children?: ReactNode
  disabled?: boolean
}

export const Button = ({ title, variant = 'default', onClick, style, classNames, children, disabled = false }: IProps) => {
  const variantStyles = variantClassName[variant]
  return (
    <button
      disabled={disabled}
      style={{ borderRadius: '10px', ...style, borderWidth: '1px', borderColor: variantStyles.border, borderStyle: 'solid' }}
      className={clsx(
        `${classNames} max-h-[30px] rounded-[20px] px-[10px] text-[8px] leading-7 tracking-wider transition duration-500 ease-in-out hover:!border-black hover:!bg-black hover:!text-white  ${variantStyles.backgroundColor} ${variantStyles.color} text-[12px] font-semibold`,
        { ' !border-none border-gray-400 bg-gray-400 text-gray-200 hover:!border-gray-400 hover:!bg-gray-400': disabled },
      )}
      onClick={onClick}
    >
      {children}
      {title}
    </button>
  )
}
