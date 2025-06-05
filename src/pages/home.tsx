import Intro from "../components/intro"
import Projects from "../components/projects"
import Qoute from "../components/qoute"
import Tech from "../components/tech"

import { FloatingDock } from "../floatingDock"
import { IconBrandX } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconBrandLinkedin } from '@tabler/icons-react'

const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/nevergetserious",
    },
  
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/confusedhumor",
    },
    
  
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

export const Home = () => {
    return (
        <div >
   
         <Intro/>
         <div className='flex-1 mt-12 flex items-center justify-center flex-col mb-6'>
         <FloatingDock 
         items={links}
         />
              <div
    className='text-xl'
    style={{ fontFamily: 'Ubuntu Mono', color: '#00FF7F' }}
  >
    coded@byvarun.tech
  </div>
         </div>
         <Tech/>
         <Projects/>
         <Qoute/>
   
        </div>
    )
}