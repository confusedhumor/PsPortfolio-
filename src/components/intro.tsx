import { motion } from 'framer-motion';

function Intro() {
  return (
    <div className="tracking-tighter" style={{fontFamily:'Ubuntu mono'}}>
      <div className='grid grid-cols-12 w-screen gap-x-4 mt-7'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className='col-span-8 text-4xl text-end sm:col-span-7 sm:text-8xl'
        >
          Frontend <br/>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='sm:pt-10 sm:pl-24 col-span-4 text-xs pt-2 sm:col-span-5 sm:text-sm'
        >
          /Based in <br/> Gurgaon, India
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='col-span-10 text-4xl text-center sm:text-start sm:text-8xl sm:ml-[21rem]'
          style={{ color: '#00FF7F' }}
        >
          Developer
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-6 text-sm sm:text-lg text-center sm:text-right sm:mr-100 col-span-12 mx-4 sm:mx-8'
        >
          I code <i><b>so spicy,</b></i> 
          <i><b> even the <span className="text-red-600 italic">bugs</span></b></i> run away.
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;