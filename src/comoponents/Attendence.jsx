import React, { useState } from 'react'
import Form from './Form'
import Subjects from './Subjects'

const Attendence = () => {
    const [marker,setMarker]=useState(false)
    const handleOpenForm=()=>{
        setMarker(!marker)
    }

    if (marker) return <Form/>;
  return (
    <>
  <div className=' flex flex-col p-4 gap-5'>
      <div className='h-[50vw] w-full flex    gap-4 items-center justify-between '>
    {/* left side ka kam  */}
    <div className='bg-green-300 h-full w-1/2 text-white flex flex-col gap-4 '>
        <h1 className='font-extrabold overflow-auto text-2xl al p-2' >
            TOTAL ATTENDENCE
        </h1>
        <div className='flex gap-8 p-4 items-center justify-center'>
            <div>
                <h1 className='font-bold text-3xl text-black border-2 border-black '>100%</h1>
            </div>
            <div>
                <h1> 100/100</h1>
            </div>
        </div>
    </div>
    {/* right side ka kam  */}
    <div className='bg-yellow-200 h-full w-1/2 '>right side</div>
    </div>
    <button className='bg-red-500 items-center  rounded-xl p-2'
     onClick={handleOpenForm} >
        Add attendence 
    </button>
   

  </div>
  <Subjects/>
  </>
  )
}

export  {Attendence}