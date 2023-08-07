import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion"
import img from "../public/assets/1638089535060 (2).jpg"
const About = () => {
    return (
        <div id="about" className='w-full md:h-screen p-2 flex items-center py-16 snap-mandatory snap-y' >
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-[15px] text-[#d2d1eb]'>About</p>
                    <h2 className='py-4 text-[#adefd1ff]'  >Who I am</h2>
                    <p className='py-2 text-gray-400'> I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript,
            React,nextjs and typescript. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.</p>
            <p className='py-2 text-gray-400'>
            I started web development in 2021 building many frontend and full stack projects. I have also done a part time remote intern where i was responsible for frontend interactions and also done backend implementation. I am very much comfortable in team as i have worked on team projects and build efficient apps.
          </p>
                </div>
                <motion.div
                initial={{
                    x:-200,
                }}
                transition={{
                    duration:1,
                }}
                whileInView={{
                    x:0,
                }}
                viewport={{
                    once:true
                }}
                 className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 ease-in duration-300'> 
                    <Image className='rounded' width="400" height="400" src={img} alt="/"></Image>
                </motion.div>
            </div>
            
        </div>
    );
};

export default About;