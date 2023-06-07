import LineGradiant from "../component/LineGradiant";
import { motion } from "framer-motion";
import Project1 from "../assets/project-1.png"
import Project2 from "../assets/project-2.png"
import Project3 from "../assets/project-3.png"
import Project4 from "../assets/project-4.png"
import Project5 from "../assets/project-5.png"
import Project6 from "../assets/project-6.png"
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};



const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradiant width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Welcome To My Project List.
        </p>
      </motion.div>

      
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
         
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          
          }}>
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
             bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue" >
              <p className="text-2xl font-playfair">Project 1</p>
                <p className="mt-7">
                  Project 1 is Normal Facebook UI designed using HTML , CSS and JAVASCRIPT.
              </p>

            </div>
            <img className="h-auto" src={Project1} alt="project"/>

          </motion.div>

          <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          
          }}>
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
             bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue" >
              <p className="text-2xl font-playfair">Project 2</p>
                <p className="mt-7">
                  Project 2 is Youtube Clone. This project is designed using React Js and Tailwind css and other different React library.
              </p>

            </div>
            <img className="h-auto" src={Project2} alt="project"/>

          </motion.div>

          <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          
          }}>
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
             bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue" >
              <p className="text-2xl font-playfair">Project 3</p>
                <p className="mt-7">
                 Project 3 is normal contact page which is designed for online examination system using React Js and Css.
              </p>

            </div>
            <img className="h-auto" src={Project3} alt="project"/>

          </motion.div>
          <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          
          }}>
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
             bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue" >
              <p className="text-2xl font-playfair">Project 4</p>
                <p className="mt-7">
                 Project 4 is TODO-APP created using HTML and JavaScript.
              </p>

            </div>
            <img className="h-auto" src={Project4} alt="project"/>


          </motion.div>
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            
            }}>
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
             bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue" >
              <p className="text-2xl font-playfair">Project 5</p>
                <p className="mt-7">
                 Project 5 is Form Validation created using React Js and Css.
              </p>

            </div>
            <img className="h-auto" src={Project5} alt="project"/>

          </motion.div>
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            
            }}>
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
             bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue" >
              <p className="text-2xl font-playfair">Project 6</p>
                <p className="mt-7">
                Project 6 is Weather App created in React which has the feature of searching the city to show their Whether for that day.
              </p>

            </div>
            <img className="" src={Project6} alt="project"/>

          </motion.div>


          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;