import { useState } from 'react'
import './App.css'
import { NavPannel } from './components/NavPannel'
import { LandingPageBody } from './components/LandingPageBody';
import { ProjectsPageBody } from './components/ProjectsPageBody';
import { AboutPageBody } from './components/AboutPageBody';
import { ContactPageBody } from './components/ContactPageBody';

function App() {

  return (
    <>
      <div className='flex flex-col w-[900px] object-center'>
        {/* <NavPannel /> */}
        <LandingPageBody />
        <ProjectsPageBody />
        <AboutPageBody />
        <ContactPageBody />
      </div>
      
    </>
  )
}

export default App
