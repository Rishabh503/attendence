import React, { useEffect } from 'react'

const Form = ({value,func1,subjects,func2}) => {
    // console.log(subjects)

    const handleButton=()=>{
        func1(!value);
    }
    const updateMarks=(index,amount)=>{
        const updatedSubjs=subjects.map((subject,i)=>
            i===index?{...subject,marks:subject.marks+amount,total:subject.total+1}:subject )
        

        func2(updatedSubjs);
        localStorage.setItem('subjects',JSON.stringify(updatedSubjs));
       
    }
    // console.log(subjects)
    useEffect(() => {
      // Save to localStorage whenever the subjects state changes
      localStorage.setItem('subjects', JSON.stringify(subjects));
    }, [subjects]);

    const deleteALL=()=>{
      func2([ {name:"PSLP",
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
    },]);
    }
    
  return (
    
    <div className='flex flex-col h-full w-full p-10  justify-center align-middle gap-10 bg-yellow-400'>
       <button type='submit' className='bg-slate-300 rounded-xl p-4' onClick={handleButton}>
                Go Back
            </button>
       {
        subjects.map((subject,index)=>(
         <div className='flex gap-2 justify-between flex-col ' key={index}>
          <p className='text-2xl '>  {subject.name}</p>
            <button className='bg-pink-700  hover:bg-blue-500 rounded-xl transition-200ms '  onClick={()=>updateMarks(index,1)}>
                <p  className='text-xl font-semibold p-2 '> CLASS TAKEN</p> 
                </button>
               
                <button  className='bg-red-300 hover:bg-blue-500 rounded-xl' onClick={()=>(updateMarks(index,0))}>
               <p className='text-xl font-semibold p-2 rounded-xl'> CLASS LEFT</p>
                </button>
         </div>
        ))
       }
        <button type='submit' className='bg-slate-300 rounded-xl p-4' onClick={handleButton}>
                Exit 
            </button>

            <button type='submit' className='bg-slate-300 rounded-xl p-4' onClick={deleteALL}>
                Danger 
            </button>
    </div>
  )
}

export default Form