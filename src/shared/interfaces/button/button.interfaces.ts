import type { EButtonVariant } from 'shared/interfaces'

export interface IButtonVariant {
  [key: EButtonVariant]: {
    backgroundColor: string
    color: string
  }
}
