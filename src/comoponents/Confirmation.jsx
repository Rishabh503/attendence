import React, { useState } from 'react'

const Confirmation = ({dangerState,func}) => {
    const [buttonState,setButtonState]=useState(false)
  return (
    <div className=' h-full w-full flex flex-wrap  justify-betweeen gap-10'>
    <button className=' bg-green-500 p-10 rounded-lg' onClick={setButtonState(true)}>
        Yes 
        </button>
    <button  className=' bg-red-500 p-10 rounded-lg'>
            NO
        </button>
</div>
  )
}

export default Confirmation