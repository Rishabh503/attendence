import React, { useEffect, useState } from 'react'
import Form from './Form'
import { Attendence } from './Attendence'

const Subjects = () => {
    const [subjs,setSubjs]=useState([
        {name:"subject 1",
            marks:10
        },
        {name:"subject 2",
            marks:10
        },
        {name:"subject 3",
            marks:10
        },
        {name:"subject 4",
            marks:10
        },
        {name:"subject 5",
            marks:10
        },
        {name:"subject 6",
            marks:10
        },
        {name:"subject 7",
            marks:10
        },
    ])
    // setSubjs(localStorage.getItem('subjects')
    const [marker,setMarker]=useState(false)
    const handleOpenForm=()=>{
        setMarker(!marker)
    }
    
    if (marker) return <Form value={marker} subjects={subjs}  func2={setSubjs} func1={setMarker} />;
  return (
    <>
    <Attendence subjects={subjs}/>
    <div className='flex flex-col p-1 '>
        <button className='bg-red-500 w-[80vw]  mx-auto rounded-xl p-2'
             onClick={handleOpenForm} >
                Add attendence 
        </button>
        {subjs.map((subject,index)=>(
            <div key={index} className='bg-blue-200 h-[20vw] p-4  rounded-md m-3 flex justify-between items-center'>
              <p className='text-violet-400 font-semibold text-2xl'>{subject.name}</p>
              <p className='font-bold text-3xl'>{subject.marks} %</p>
                
            </div>
        ))}
    </div>
    </>
  )
}

export default Subjects