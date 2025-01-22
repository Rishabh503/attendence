import React from 'react'

const Form = ({value,func1,subjects,func2}) => {
    // console.log(subjects)

    const handleButton=()=>{
        func1(!value);
    }
    const updateMarks=(index,amount)=>{
        const updatedSubjs=subjects.map((subject,i)=>
            i===index?{...subject,marks:subject.marks+amount}:subject )
        

        func2(updatedSubjs);
        localStorage.setItem('subjects',JSON.stringify(updatedSubjs));
       
    }
    // console.log(subjects)

    
  return (
    
    <div className='flex flex-col h-full w-full p-10  justify-center align-middle gap-10 bg-yellow-400'>
       {
        subjects.map((subject,index)=>(
         <div className='flex gap-2 justify-between flex-col ' key={index}>
          <p className='text-2xl '>  {subject.name}</p>
            <button className='bg-pink-700 rounded-xl '  onClick={()=>updateMarks(index,1)}>
                <p  className='text-xl font-semibold p-2 '> CLASS TAKEN</p> 
                </button>
               
                <button  className='bg-red-300 rounded-xl' onClick={()=>updateMarks(index,-1)}>
               <p className='text-xl font-semibold p-2 rounded-xl'> CLASS LEFT</p>
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