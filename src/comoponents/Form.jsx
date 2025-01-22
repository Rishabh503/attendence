import React from 'react'

const Form = ({value,func1,subjects,func2}) => {
    // console.log(subjects)

    const handleButton=()=>{
        func1(!value);
    }
    const updateMarks=(index,amount)=>{
        func2((prev)=>
                    prev.map((subject,i)=>
                    i===index?
    {...subject,marks:subject.marks+amount}
:subject)
        )
    }
    console.log(subjects)
  return (
    
    <div className='flex flex-col justify-center align-middle gap-10 bg-yellow-400'>
       {
        subjects.map((subject,index)=>(
         <div key={index}>
            <button className='bg-red-300' onClick={()=>updateMarks(index,1)}>
                bttn1 
                </button>
               
                <button  className='bg-red-300' onClick={()=>updateMarks(index,-1)}>
                bttn2
                </button>
         </div>
        ))
       }
        <button type='submit' className='bg-red-500'  onClick={handleButton}>
                exit
            </button>
    </div>
  )
}

export default Form