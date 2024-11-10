'use client'

import subject1 from '../../../../public/assets/subject1.png'
import subject2 from '../../../../public/assets/subject2.png'
import subject3 from '../../../../public/assets/subject3.png'
import subject4 from '../../../../public/assets/subject4.png'
import subject5 from '../../../../public/assets/subject5.png'

export const Subjects = () => {
  return (
    <div className='container absolute bottom-0 left-0 right-0 top-0 z-[-1] mx-auto lg:max-w-screen-2xl'>
      {/*   circle */}
      <img
        alt='subject 1'
        src={subject1.src}
        className='absolute top-[10%] hidden opacity-20  lg:right-[35%] lg:block'
      />
      <img
        alt='subject 6'
        src={subject1.src}
        className='absolute left-[-10%] top-[15%] hidden opacity-20  lg:block'
      />
      {/*   circle */}

      <img
        alt='subject 3'
        src={subject3.src}
        className='absolute top-[25%] hidden opacity-20  lg:left-[90%] lg:block'
      />
      <img
        alt='subject 9'
        src={subject3.src}
        className='absolute top-[75%] hidden opacity-20  lg:left-[40%] lg:block'
      />

      {/*   triangle */}
      <img
        alt='subject 4'
        src={subject4.src}
        className='absolute top-[50%] hidden opacity-20  lg:left-[70%] lg:block'
      />
      {/*   triangle */}

      {/* //cross */}
      <img
        alt='subject 8'
        src={subject5.src}
        className='absolute top-[49%] hidden opacity-35  lg:left-[-7%] lg:block'
      />
      <img
        alt='subject 5'
        src={subject5.src}
        className='absolute top-[-12%] hidden opacity-45  lg:left-[65%] lg:block'
      />
      <img
        alt='subject 5'
        src={subject5.src}
        className='absolute right-[50%] top-[-8%] block  opacity-25 lg:hidden'
      />
      {/* //cross */}

      <img
        alt='subject 7'
        src={subject2.src}
        className='absolute top-[5%] hidden opacity-20  lg:left-[17%] lg:block'
      />
    </div>
  )
}
