interface IProps {
  name: Undefinable<string>
  src: Undefinable<string>
}

export const GameElement = ({ name, src }: IProps) => {
  return (
    <div>
      <div className='h-[160px] w-[160px] rounded-[20px] transition duration-500 hover:scale-110 lg:h-[200px] lg:w-[200px]'>
        {src ? (
          <img
            className='h-[160px] w-[160px] rounded-[20px] lg:h-[200px] lg:w-[200px]'
            alt={name}
            src={src}
          />
        ) : (
          <div className='flex h-[160px] w-[160px] flex-col items-center justify-center rounded-[20px] bg-[#b74020] text-white lg:h-[200px] lg:w-[200px]'>
            <p className=' text-[27px] lg:text-[41px]'>+5000</p>
            <p>игр</p>
          </div>
        )}
      </div>
      <p className='mt-2 max-w-[160px] text-[14px] lg:max-w-[200px] lg:text-[16px]'>{name}</p>
    </div>
  )
}
