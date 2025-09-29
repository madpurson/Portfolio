import { useState } from 'react'
import './App.css'
import { NavPannel } from './components/NavPannel'
import { LandingPageBody } from './components/LandingPageBody'

function App() {

  return (
    <>
      <div className='flex flex-col w-[900px]'>
        <NavPannel />
        <LandingPageBody />
      </div>
      
    </>
  )
}

export default App
