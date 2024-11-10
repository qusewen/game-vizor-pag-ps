import { Button, GameElement, GameMonthLib } from 'shared/_ui'

export const GameMonth = () => {
  return (
    <div className='bg-[#D4DEEE]'>
      <div className='container mx-auto max-w-[1100px] pb-[25px] pt-[50px]'>
        <div className='mb-[25px] text-center text-[27px] lg:text-[41px]'>Игры в подписке этого месяца</div>
        <div className='flex flex-wrap justify-around gap-3 lg:justify-between'>
          {GameMonthLib.map(({ id, poster, name }) => {
            return (
              <GameElement
                name={name}
                key={id}
                src={poster}
              />
            )
          })}
        </div>
        <p className='mb-[10px] mt-[25px] text-center'>Доступно к скачиванию на тарифах</p>
        <div className='mx-auto flex w-[80%] items-center justify-center gap-1 lg:w-fit'>
          <div className='flex w-[140px] items-center justify-center rounded-[5px] bg-black py-[5px] text-[12px] font-medium uppercase text-[#FCC000] lg:w-[200px]'>
            deluxe
          </div>
          <div className='flex w-[140px] items-center justify-center rounded-[5px] bg-[#FCC000] py-[5px] text-[12px] font-medium uppercase text-black lg:w-[200px]'>
            extra
          </div>
          <div className='flex w-[140px] items-center justify-center rounded-[5px] bg-white py-[5px] text-[12px] font-medium uppercase text-black lg:w-[200px]'>
            essential
          </div>
        </div>
        <div className='mt-[25px] flex flex-col items-center justify-center lg:mt-9 lg:flex-row'>
          <p className='text-[27px]'>Есть вопросы?</p>
          <Button
            onClick={() => window.open('https://gamevizor.ru/profile/chats/')}
            title='Связаться с нами'
            variant='contained'
            classNames='!bg-[#002D90] !border-0 !text-[12px] lg:mt-0 lg:ml-5  p-[19px] flex items-center justify-center mt-4'
          />
        </div>
      </div>
    </div>
  )
}
