interface InitialValues {
  name: Undefinable<string>
  phone_number: Undefinable<string>
  email: Undefinable<string>
  ps: Undefinable<string>
  comment: Undefinable<string>
  is_agree: boolean
  code: Undefinable<string>
}

export const ValidationScheme = (values: InitialValues) => {
  const errors: Partial<InitialValues> = {}

  if (!values.name || !values.is_agree || !values.email || !values.phone_number) {
    errors.name = 'Поле обязательно для заполнения'
  }
  return errors
}

export const orderInitialState = {
  name: undefined,
  phone_number: undefined,
  email: undefined,
  ps: undefined,
  comment: undefined,
  is_agree: undefined,
  code: undefined,
}
