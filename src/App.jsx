import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Attendence } from './comoponents/Attendence'
import Subjects from './comoponents/Subjects'

function App() {
 return (
  <div className='bg-gray-800 h-full w-full'>
    <Attendence/>
   
  </div>
 )
}

export default App
