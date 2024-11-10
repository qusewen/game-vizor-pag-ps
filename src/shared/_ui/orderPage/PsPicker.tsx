import { useFormikContext } from 'formik'

export const PsPicker = () => {
  const formik = useFormikContext()

  const psData = [
    { name: 'PlayStation 4', id: 1, value: 'ps4' },
    { name: 'PlayStation 5', id: 2, value: 'ps5' },
  ]
  return (
    <select
      value={formik.getFieldProps('ps').value}
      onChange={(e) => formik.setFieldValue('ps', e.target.value)}
      defaultValue='default'
      aria-placeholder='Консоль'
      className={`${formik.getFieldProps('ps').value === 'default' || !formik.getFieldProps('ps').value ? 'text-gray-400' : 'text-black'} h-[35px] w-full rounded-[5px] border border-[#CCCDCD] bg-[#E7E7E7] pl-2 text-[14px] outline-0`}
    >
      <option
        value='default'
        disabled
        hidden
      >
        Поколение консоли
      </option>
      {psData.map(({ id, name, value }) => {
        return (
          <option
            className='text-black'
            key={id}
            value={value}
          >
            {name}
          </option>
        )
      })}
    </select>
  )
}
