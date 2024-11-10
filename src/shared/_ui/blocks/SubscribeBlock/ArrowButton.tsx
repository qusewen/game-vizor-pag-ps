interface IProps {
  color: string
}
export const ArrowButton = ({ color }: IProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='31'
      height='31'
      fill='none'
      viewBox='0 0 31 31'
    >
      <path
        stroke={`${color}`}
        strokeWidth='2'
        d='M23.934 7.044 6.967 24.01m16.867-3.65V6.787H10.26'
      />
    </svg>
  )
}
