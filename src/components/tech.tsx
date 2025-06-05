import { motion } from 'framer-motion';
import reactIcon from '../assets/icons/reactIcon.svg'
import nextIcon from '../assets/icons/nextIcon.svg'
import tsIcon from '../assets/icons/tsIcon.svg'
import nodeIcon from '../assets/icons/nodeIcon.svg'
import gitIcon from '../assets/icons/gitIcon.svg'
import expressIcon from '../assets/icons/expressIcon.svg'
import tailwindIcon from '../assets/icons/tailwindIcon.svg'
import mongoDBIcon from '../assets/icons/mongoDBIcon.png'

const Tech = () => {
  const techItems = [
    { icon: reactIcon, name: 'React', alt: 'reactIcon' },
    { icon: tsIcon, name: 'Typescript', alt: 'tsIcon' },
    { icon: nextIcon, name: 'NextJs', alt: 'nextIcon' },
    { icon: nodeIcon, name: 'NodeJs', alt: 'nodeIcon' },
    { icon: mongoDBIcon, name: 'MongoDB', alt: 'mongoIcon' },
    { icon: gitIcon, name: 'Git/Github', alt: 'gitIcon' },
    { icon: expressIcon, name: 'ExpressJS', alt: 'expressIcon' },
    { icon: tailwindIcon, name: 'Tailwind', alt: 'tailwindIcon' },
  ];

  return (
    <div style={{fontFamily:'Helvetica'}}>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-3xl mx-6 sm:mx-20 sm:text-6xl'>Tech I use</h1>
        </motion.div>

        <div className='grid grid-cols-5 grid-rows-2 gap-y-10 gap-x-9 mt-10 px-9 sm:px-28'>
          {techItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className='flex flex-col justify-between items-center'
            >
              <motion.img 
                src={item.icon} 
                alt={item.alt} 
                className='h-11'
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div 
                className='text-sm sm:text-lg'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                {item.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;