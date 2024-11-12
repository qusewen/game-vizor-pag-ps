import gamepad from '../../../../../public/assets/gamepad2.svg'
import person from '../../../../../public/assets/person.svg'

export const BypassBlock = () => {
  return (
    <div>
      <div className='container mx-auto flex max-w-[1100px] flex-col items-center pb-[75px] lg:flex-row'>
        <div className='w-[335px] pt-[24px] text-center text-[27px] leading-10 lg:mr-[110px] lg:w-[360px] lg:min-w-[360px] lg:pt-[44px] lg:text-left	lg:text-[27px]'>
          Больше не нужно придумывать как обойти блокировку и оформить подписку
        </div>
        <div className='relative flex flex-col  gap-5 pt-[35px] lg:flex-row lg:pt-[75px]'>
          <div className='flex w-[290px]  flex-col items-center rounded-[20px] bg-[#F1EEEE] px-2 pb-[25px] pt-[20px] lg:pb-[4px] lg:pt-[42px]'>
            <img
              alt='gamepad'
              src={gamepad.src}
            />
            <p className='mt-[20px] text-center lg:mt-[40px]'>Играй в бесплатные 600+ игр <br/> по подписке уже сейчас
            </p>
          </div>

          <div className='absolute  left-[18px] top-[44%] flex h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-white bg-[#DCE7F8] lg:left-[45%] lg:top-[50%] '>
            или
          </div>

          <div className='flex  w-[290px] flex-col items-center rounded-[20px] bg-[#DCE7F8] px-2 pb-[20px] pt-[20px] lg:pb-[4px] lg:pt-[42px]'>
            <img
              alt='person'
              src={person.src}
            />
            <p className='mt-[20px] text-center lg:mt-[40px]'>Начни играть со своими друзьями в онлайне</p>
          </div>
        </div>
      </div>
    </div>
  )
}
