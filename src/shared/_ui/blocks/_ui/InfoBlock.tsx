import type { ReactNode } from 'react'

interface IProps {
  index: number
  text: string | ReactNode
  subText: string | ReactNode
}
export const InfoBlock = ({ index, text, subText }: IProps) => {
  return (
    <div className='relative h-fit w-[360px] rounded-[20px] bg-white p-[29px] pb-[30px] lg:h-[220px]  '>
      <p className='absolute right-[37px] top-[28px]  font-medium  text-[#b74020]'>0{index}</p>
      <div className='mb-[12px] w-[284px] font-medium'>{text}</div>
      <div className=' text-[12px]'>{subText}</div>
    </div>
  )
}
