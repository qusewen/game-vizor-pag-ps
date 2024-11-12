'use client'

import clsx from 'clsx'

import { variantClassName } from 'shared/_ui/Button/Button.lib'

import type { ClassName } from 'postcss-selector-parser'
import type { CSSProperties, ReactNode } from 'react'

interface IProps {
  title: string
  variant: Undefinable<string>
  onClick?: () => void
  style?: CSSProperties
  classNames?: string
  children?: ReactNode
  disabled?: boolean
}

export const Button = ({ title, variant = 'default', onClick, style, classNames, children, disabled = false }: IProps) => {
  // @ts-ignore
  const variantStyles = variantClassName[variant]
  return (
    <button
      disabled={disabled}
      style={{ borderRadius: '10px', ...style, borderWidth: '1px', borderColor: variantStyles.border, borderStyle: 'solid', backgroundColor: `${variantStyles?.backgroundColor} !important`  }}
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
