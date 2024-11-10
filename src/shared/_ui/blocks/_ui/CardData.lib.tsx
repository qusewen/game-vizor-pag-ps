import bg1 from '../../../../../public/assets/bgcard1.png'
import bg2 from '../../../../../public/assets/bgcard2.png'
import bg3 from '../../../../../public/assets/bgcard3.png'

export const CardDataLib = [
  {
    background: bg3.src,
    id: 1,
    type: 'Deluxe',
    cost: '5000₽',
    period: '12 Мес*',
    buttonBg: '#FFBB00',
    text: '#000000',
    monthColor: '#ffffff',
    systemName: 'deluxe',
  },
  {
    background: bg2.src,
    id: 2,
    type: 'Extra',
    cost: '4500₽',
    period: '12 Мес*',
    buttonBg: '#000000',
    text: '#FFBB00',
    monthColor: '#606060',
    systemName: 'extra',
  },
  {
    background: bg1.src,
    id: 3,
    type: 'Essential',
    cost: '3500₽',
    period: '12 Мес*',
    buttonBg: '#000000',
    text: '#ffffff',
    monthColor: '#000000',
    systemName: 'essential',
  },
]
