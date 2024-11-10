export const ScrollFunctionLib = (type: number) => {
  if (type === 1) document.getElementById('game')?.scrollIntoView({ behavior: 'smooth' })
  if (type === 2) document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })
  if (type === 3) document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  return null
}
