import { useState } from 'react'
import './App.css'
import { NavPannel } from './components/NavPannel'
import { LandingPageBody } from './screens/LandingPageBody';
import { ProjectsPageBody } from './screens/ProjectsPageBody';
import { AboutPageBody } from './screens/AboutPageBody';
import { ContactPageBody } from './screens/ContactPageBody';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <>
      <div className='flex flex-col w-[900px] object-center'>
        <SpeedInsights />
        {/* <NavPannel /> */}
        <LandingPageBody />
        <ProjectsPageBody />
        {/* <AboutPageBody />
        <ContactPageBody /> */}
      </div>
      
    </>
  )
}

export default App
