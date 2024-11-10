import { GuaranteesBlockLib } from 'shared/_ui'

export const GuaranteesBlock = () => {
  return (
    <div className='container mx-auto max-w-[1100px] py-[25px] pt-0 lg:py-[50px]'>
      <p className='mb-[25px] text-center text-[27px] lg:mb-[50px] lg:text-start lg:text-[41px]'>Гарантии</p>
      <div className='flex flex-row flex-wrap justify-center gap-[10px] lg:gap-[20px]'>
        {GuaranteesBlockLib.map(({ icon, id, background, text }, index) => {
          return (
            <div
              key={id}
              className={`flex items-center gap-2 rounded-[20px] p-[15px] lg:p-[30px] ${background} `}
            >
              <div>
                <img
                  alt={text}
                  src={icon}
                />
              </div>
              <div className='w-[200px] text-[14px] lg:w-[400px] lg:text-[20px]'>{text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
