import React, { useState } from 'react'
import Form from './Form'
import Subjects from './Subjects'

const Attendence = ({subjects}) => {
    // console.log(subjects)
    const attended=subjects.reduce((suma, subject) => suma + subject.marks, 0);
    const totalClasses=subjects.reduce((sumx, subject) =>sumx+ subject.total, 0);
    // console.log(attended,totalClasses)
    const display=Math.round((attended/(totalClasses))*100)
    // console.log(display)
  return (
    <>
  <div className=' flex flex-col p-4 gap-5'>
      <div className='h-[50vw] sm:h-[25vw] w-full flex    gap-4 items-center justify-between '>
    {/* left side ka kam  */}
    <div className='bg-green-300 h-full w-1/2 items-center text-white flex flex-col gap-4 rounded-xl '>
        <h1 className='font-extrabold overflow-auto text-2xl al p-2' >
            TOTAL ATTENDENCE
        </h1>
        <div className='flex gap-8 p-4 items-center justify-center'>
            <div>
                <h1 className='font-bold text-3xl text-black border-2 border-black '>
                    {display}%
                    </h1>
            </div>
            <div>
                <h1> {attended}/{totalClasses}</h1>
            </div>
        </div>
    </div>
    {/* right side ka kam  */}
    <div className=' h-full sm:h-[1vw] w-1/2 sm:w-[35vw] flex justify-center  items-center bg-blend-overlay  '> <p>
      <img className="bg-blend-color-dodge rounded-xl" src="photo1.jpg" alt="" />
      </p>
      
      </div>
    </div>
    
   

  </div>
  
  </>
  )
}

export  {Attendence}