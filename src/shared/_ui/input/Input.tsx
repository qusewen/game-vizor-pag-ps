import type { ClassName } from 'postcss-selector-parser'
import type { ChangeEvent, CSSProperties, HTMLInputTypeAttribute } from 'react'

interface IProps {
  placeholder: string
  className?: ClassName
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: HTMLInputTypeAttribute
  style?: CSSProperties
  value?: Undefinable<string | readonly string[] | number>
  checked?: boolean
}
export const Input = ({ onChange, placeholder, className, type = 'text', style, value = '', checked = false }: IProps) => {
  return (
    <input
      value={value}
      defaultValue={undefined}
      style={style}
      checked={checked}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`${className} ${type !== 'checkbox' ? 'h-[35px] w-full rounded-[5px] border border-[#CCCDCD] bg-[#E7E7E7] pl-2 text-[14px] outline-0' : ''}`}
    />
  )
}
