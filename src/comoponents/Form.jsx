import React, { useEffect, useState } from 'react';
import Confirmation from './Confirmation';

const Form = ({value,func1,subjects,func2}) => {
    // console.log(subjects)
    const [danger,setDanger]=useState(false);

    const handleButton=()=>{
        func1(!value);
    }
    const addAttendence=(index)=>{
        const updatedSubjs=subjects.map((subject,i)=>
            i===index?{...subject,marks:subject.marks+1,total:subject.total+1}:subject )
        
        alert("taken attendence added succesfully")
        func2(updatedSubjs);
        localStorage.setItem('subjects',JSON.stringify(updatedSubjs));
    }

    const classLeft=(index)=>{
        const updatedAfterLeft=subjects.map((subject,i)=>
        i===index? {...subject,total:subject.total+1}:subject)
        alert("left attendence added succesfully")
        func2(updatedAfterLeft);
        localStorage.setItem('subjects',JSON.stringify(updatedAfterLeft));
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
    
    const handleCheck=()=>{
        // setDanger(!danger)
        deleteALL()
    }
    
    // if(!danger) return (
    //     <Confirmation dangerState={danger} func={setDanger()}/>
    // )

  return (
    
    <div className='flex flex-col h-full w-full p-10  justify-center align-middle gap-10 bg-yellow-400'>
       <button type='submit' className='bg-slate-300 rounded-xl p-4' onClick={handleButton}>
                Go Back
            </button>
       {
        subjects.map((subject,index)=>(
         <div className='flex gap-2 justify-between flex-col ' key={index}>
          <p className='text-2xl '>  {subject.name}</p>
            <button className='bg-pink-700  hover:bg-blue-500 rounded-xl transition-200ms '   onClick={()=>addAttendence(index)}>
                <p  className='text-xl font-semibold p-2  cursor-pointer '> CLASS TAKEN</p> 
                </button>
               
                <button  className='bg-red-300 hover:bg-blue-500 rounded-xl cursor-pointer' onClick={()=>(classLeft(index))}>
               <p className='text-xl font-semibold p-2 rounded-xl'> CLASS LEFT</p>
                </button>
         </div>
        ))
       }
        <button type='submit' className='bg-slate-300 rounded-xl p-4' onClick={handleButton}>
                Exit 
            </button>

            <button  className='bg-slate-300 rounded-xl p-4' onClick={handleCheck}>
                Danger 💀
            </button>
    </div>
  )
}

export default Form