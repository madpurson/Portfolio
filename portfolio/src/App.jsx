import { useState } from 'react'
import './App.css'
import { NavPannel } from './components/NavPannel'
import { MainBody } from './components/Body'

function App() {

  return (
    <>
      <div className='flex flex-col w-[900px]'>
        <NavPannel />
        <MainBody />
      </div>
      
    </>
  )
}

export default App
