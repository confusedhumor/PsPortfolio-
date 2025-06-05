import { motion } from 'framer-motion';

const Qoute = () => {
  const quote1 = "As developers we don't do things because they are easy,";
  const quote2 = "We do them because we thought they are going to be easy";
  const author = "-fireship";

  return (
    <div>
      <div className='flex-row mt-20 font-thin'>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className='flex flex-col items-center justify-center text-xs sm:text-base'
        >
          <div className='text-right'>
            {quote1.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.03,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className='text-right'>
            {quote2.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.1,
                  delay: (quote1.length + index) * 0.03,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: (quote1.length + quote2.length) * 0.03 }}
          className='flex justify-center text-sm sm:text-base text-right mt-2'
        >
          <i><b>{author}</b></i>
        </motion.div>
      </div>
    </div>
  );
};

export default Qoute;