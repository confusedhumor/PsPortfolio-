import linkedIn from '../assets/socials/linkedIn.svg'
import github from '../assets/socials/github.svg'
import twitter from '../assets/socials/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{fontFamily:'Helvetica'}}>
    
    <div className='flex flex-col justify-evenly items-center mt-14'>
    <div className='flex flex-row'>
    <div className='flex flex-col mx-14 gap-y-2'>
    <div className='font-bold text-lg'>Follow me</div>  
    <div className='grid sm:grid-cols-2 gap-2 gap-x-6 gap-y-4'>
    <a href='#'><div className='flex flex-row gap-2 items-center justify-start'><img src={linkedIn} alt='linkedIn' height={30} width={30}></img>LinkedIn</div></a>
    <a href='https://x.com/nevergetserious' target='_blank'><div className='flex flex-row gap-2 items-center justify-start '><img src={twitter} alt='twitter' height={30} width={30}></img>Twitter</div></a>
    <a href='https://github.com/confusedhumor' target='_blank'><div className='flex flex-row gap-2 items-center justify-start '><img src={github} alt='github' height={30} width={30}></img>Github</div></a>
    </div>
    </div>
    <div className='flex flex-col mx-14 gap-y-2 '>
    <div className='font-bold text-lg'>Explore</div>
    <div className='grid sm:grid-cols-2 gap-2 gap-x-6 gap-y-5'>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/aboutme">About Me</Link></div>
    <div><Link to="/projects">Projects</Link></div>
    <div><Link to="/contactme">Contact Me</Link></div>
    </div>
    </div>
    <div className='hidden sm:block'> coded@byvarun.tech</div>
    </div>
    <div className='sm:hidden block mt-4'> coded@byvarun.tech</div>
  
    </div>
  
    <div className="mt-7 sm:flex justify-center items-center hidden mr-20">
   
  </div>
    <div className="mt-7 flex items-center justify-center ml-12 sm:hidden mr-20">
    
  </div>
      
    </div>
  )
}

export default Footer