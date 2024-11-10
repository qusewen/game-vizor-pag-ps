import { Button } from 'shared/_ui'

export const SubscribeElement = () => {
  return (
    <div className='w-full rounded-[20px] bg-[#1B55A6] bg-opacity-50 p-[30px] text-white backdrop-blur-lg lg:p-[30px] lg:pb-[40px] lg:pr-[50px]'>
      <div className='text-center text-[22px] lg:text-left'>Подпишись на рассылку</div>
      <div className='mb-[20px] text-center text-[10px] text-[#4D81BE] lg:mb-[40px] lg:text-left'>Делимся скидками и рассказываем новости</div>
      <div className='flex flex-col  items-center lg:flex-row lg:gap-3'>
        <input
          placeholder='Email'
          type='email'
          className='h-[37px]  w-[80%] rounded-[10px] border-0 p-3 text-black outline-0 lg:w-[220px]'
        />
        <Button
          title='Подписаться'
          variant='contained'
          classNames='!border-0 !text-[12px] lg:mt-0 lg:w-[160px] w-[80%]   p-[19px] px-[35px] flex items-center justify-center mt-4'
        />
      </div>
    </div>
  )
}
