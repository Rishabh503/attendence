import React from 'react'

const Subjects = () => {
    const subjs=[
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
    ]
  return (
    <div className='p-1'>
        {subjs.map((subject,index)=>(
            <div key={index} className='bg-blue-200 h-[20vw] p-4  rounded-md m-3 flex justify-between items-center'>
              <p className='text-violet-400 font-semibold text-2xl'>{subject.name}</p>
              <p className='font-bold text-3xl'>{subject.marks} %</p>
                
            </div>
        ))}
    </div>
  )
}

export default Subjects