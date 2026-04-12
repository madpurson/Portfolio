import { NavPannel } from '../components/NavPannel'
import { LandingPageBody } from '../components/LandingPageBody';
import { ProjectsPageBody } from '../components/ProjectsPageBody';
import { AboutPageBody } from '../components/AboutPageBody';
import { ContactPageBody } from '../components/ContactPageBody';
import { SpeedInsights } from "@vercel/speed-insights/react"

function MainPage() {

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

export default MainPage
