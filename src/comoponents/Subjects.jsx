import React, { useEffect, useState } from 'react'
import Form from './Form'
import { Attendence } from './Attendence'

const Subjects = () => {
    const [subjs,setSubjs]=useState(()=>{
        const savedSubjs=localStorage.getItem('subjects');
        return savedSubjs? JSON.parse(savedSubjs):[
            {name:"PSLP",
                marks:0,
                total:0
            },
            {name:"TOC ",
                marks:0,
                total:0,
            
            },
            {name:"CNS ",
                marks:0,
                total:0
            },
            {name:"JAVA ",
                marks:0,
                total:0
            },
            {name:"TECH WRIITNG ",
                marks:0,
                total:0
            },
            {name:"DBMS ",
                marks:0,
                total:0
            },
            {name:"DBMS LAB",
                marks:0,
                total:0
            },
            {name:"PSLP LAB",
                marks:0,
                total:0
            },
            {name:"JAVA LAB",
                marks:0,
                total:0
            },
            {name:"CNS LAB",
                marks:0,
                total:0
            },
        ];
    })
    console.log(subjs[1])
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
              <p className='font-bold text-3xl'>{Math.round((subject.marks)/subject.total)*100} %</p>
                
            </div>
        ))}
    </div>
    </>
  )
}

export default Subjects