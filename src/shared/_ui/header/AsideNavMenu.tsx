import { HeaderButtonGroup } from 'shared/_ui'

export const AsideNavMenu = () => {
  return (
    <nav className='flex flex-col gap-3'>
      <ul>
        <li
          className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
          onClick={() => window.open('https://gamevizor.ru/catalog/')}
        >
          Каталог
        </li>
        <li
          className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
          onClick={() => window.open('https://gamevizor.ru/catalog_subscriptions/')}
        >
          Подписки
        </li>
        <li
          className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
          onClick={() => window.open('https://gamevizor.ru/catalog_currency/')}
        >
          Донат
        </li>
        <li
          className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
          onClick={() => window.open('https://gamevizor.ru/replenishment/')}
        >
          Пополнения
        </li>
        <li
          className='cursor-pointer transition duration-500 ease-in-out hover:text-[#b74020]'
          onClick={() => window.open('https://gamevizor.ru/sales/')}
        >
          Акции
        </li>
      </ul>
      <HeaderButtonGroup />
    </nav>
  )
}
