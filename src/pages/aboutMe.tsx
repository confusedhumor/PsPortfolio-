import { motion } from 'framer-motion';

export const AboutMe = () => {
  const text1 = "Hey! I'm Varun";
  const text2 = "and I'm obsessed with creating products that people actually want to use—not just look at once and forget. Right now, I'm probably tinkering with a side project, fixing one last bug.";

  return (
    <>
      <div className="w-full flex items-center justify-center px-4 py-8 overflow-x-hidden">
        <div
          className="flex flex-col sm:flex-row text-center sm:text-left gap-5 max-w-4xl"
          style={{ fontFamily: 'Ubuntu mono' }}
        >
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="text-3xl sm:text-4xl"
            >
              {text1.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.05,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              className="w-full sm:w-96 mt-2 text-base"
            >
              {text2.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 1 + index * 0.02,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center sm:justify-start"
          >
            <img
              src="https://avatars.githubusercontent.com/u/153203211"
              className="h-44 w-44 rounded-md"
              alt="Varun's profile"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};