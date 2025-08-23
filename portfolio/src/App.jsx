import { useState } from 'react'
import './App.css'
import { NavPannel } from './components/NavPannel'

function App() {

  return (
    <>
      <div className='flex flex-col w-[900px]'>
        <NavPannel />
        <div>EMPTY</div>
      </div>
      
    </>
  )
}

export default App
