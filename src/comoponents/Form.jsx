import React, { useEffect, useState } from 'react';
// import Confirmation from './Confirmation'; 

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
    
    const deleteOne=(index)=>{
        const updatedAfterUndo=subjects.map((subject,i)=>
        i===index? {...subject,
            total: subject.total && subject.marks>0?subject.total-1:subject.total,
            marks:subject.total && subject.marks>0?subject.marks-1:subject.marks}:subject)
        
        alert("class removal done")
        func2(updatedAfterUndo);
        localStorage.setItem('subjects',JSON.stringify(updatedAfterUndo));
    }
    
// ole.log(subjects)
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
        alert("all data will be reset")
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
         <div className='flex gap-2 justify-between flex-col ' key={index} id={index}>
             <div className='flex items-center justify-between '>
                <p className='text-2xl '>  {subject.name}</p>
            </div>
            <div className='flex  grid-cols-3 gap-5'>
                <button className='bg-blue-700  hover:bg-green-500 rounded-xl transition-200ms '   onClick={()=>addAttendence(index)}>
                    <p  className='text-md font-bold p-2  cursor-pointer '> CLASS TAKEN</p> 
                </button>
                <button  className='bg-pink-500 hover:bg-blue-500 rounded-xl cursor-pointer' onClick={()=>(classLeft(index))}>
                <p className='text-md font-bold p-2  cursor-pointer '> CLASS LEFT</p>
                </button>
                <button  className='bg-blue-300 hover:bg-red-500 rounded-xl cursor-pointer' onClick={()=>(deleteOne(index))}>
                <p className='text-md font-bold p-2  cursor-pointer '>Delete One</p>
                </button>
            </div>
         </div>
        ))
       }
        <button type='submit' className='bg-slate-300 rounded-xl p-4' onClick={handleButton}>
                Exit 
            </button>

            <button  className='bg-slate-300 rounded-xl p-4' onClick={()=>{setDanger(!danger)}}>
                Danger 💀
               {danger? <div className=' w-full flex mx-24 mt-4 justify-betweeen gap-4  '>
                <button className='bg-red-500 p-2 rounded-md ' onClick={handleCheck} >
                    YES
                </button>
                    <button className='bg-green-500 p-2 rounded-md '  >
                        NO
                    </button>
               </div>
               :""}
            </button>
    </div>
  )
}

export default Form