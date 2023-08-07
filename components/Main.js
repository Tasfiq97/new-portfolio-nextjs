import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion"

const Main = () => {
    const [text]=useTypewriter({
        words:[
            "Tasfiq",
            "A developer"
        ],
        loop:true,
        delaySpeed:2000
    })
    return (
        <div id='home' className='w-full h-screen text-center snap-mandatory snap-y' >
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
             <p className='uppercase text-sm tracking-[10px] text-gray-300'>LETS BUILD SOMETHING</p>
             <h1 className='py-4 text-[#adefd1ff]'>Hi I am <span className='text-[#9593dd]'>{text}</span>
              <Cursor cursorColor="#9593dd"/>
             </h1>
             <motion.h1
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
              className='py-2 text-[#adefd1ff]'>
                Enthusiastic Developer   
             </motion.h1>
             <p className='py-4 text-gray-200 max-w-[70%] m-auto'>
             I’m focused on building responsive front-end web applications
            integrating back-end technologies.Proficient in building interactive and responsive web applications using React on the frontend and backend technologies like Node.js and Express. 
             </p>
             <Link target="_blank" href="https://drive.google.com/file/d/1oPt_9M6SOLV8MAmQSgBRoaLDzR9Ue2sC/view?usp=drive_link"><button className="w-[50%] p-4 text-black mt-4">Download Resume</button></Link>
             <div className='flex items-center justify-between max-w-[330px] m-auto py-4 mt-5'>
             <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  target="_blank" href="https://www.linkedin.com/in/tasfiqul-azad/"><FaLinkedinIn className='text-2xl'/></Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link  target="_blank" href="https://github.com/Tasfiq97"><FaGithub className='text-2xl'/></Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
           <Link  target="_blank" href="mailto:tasfiqulazad200@gmail.com"> <AiOutlineMail className='text-2xl'/></Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
           <Link  target="_blank" href="tel:+8801832214481"> <BsFillPersonLinesFill className='text-2xl'/></Link>
            </div>
             </div>
                </div>

            </div>
        </div>
    );
};

export default Main;