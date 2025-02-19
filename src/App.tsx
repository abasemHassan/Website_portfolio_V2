

import './App.css'
import About from './Components/About'
import Experiences from './Components/WorkExperiences'

import Header from './Components/Header'
import Introduction from './Components/Introduction'

import ProfilePic from './Components/ProfilePic'
import ProgressBar from './Components/ProgressBar'
import Projects from './Components/Projects'

import SideBar from './Components/SideBar'
import WorkExperiences from './Components/WorkExperiences'
import SkillsSection from './Components/Skills'

function App() {
 
 
  return (
    <div className='w-screen'>
      <Header/>
      <SideBar/>
      <div className='ml-[90px]  
      grid grid-cols-1 md:grid-cols-3
      '>
        <div className='col-span-2 p-5 mt-[90px]'>
            <Introduction/>
            <About/>
            <SkillsSection/>
            <WorkExperiences/>
            <Projects/>
         
        </div>
        <div className='hidden md:block'>
          <ProgressBar/>
          <ProfilePic/>
       
        </div>
      </div>
      
    </div>
  )
}

export default App
