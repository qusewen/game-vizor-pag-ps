import type { IButtonVariant } from 'shared/interfaces'

export const variantClassName: Partial<IButtonVariant> = {
  contained: {
    backgroundColor: '#b74020',
    color: ' text-textButtonColor',
    border: '#b74020',
  },
  outlined: {
    backgroundColor: 'bg-bg-bgButtonOutlined',
    color: ' text-black',
    border: '#000000',
  },
  default: {
    backgroundColor: 'bg-bgButtonDefault',
    color: ' text-textButtonColor',
    border: 'white',
  },
}
