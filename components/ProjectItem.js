import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({title,background,projectUrl}) => {
    return (
        <div className='relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#adefd1ff] to-[#709dff] duration-300'>
        <Image className='rounded-xl group-hover:opacity-10' src={background} alt="/"></Image>
         <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
           <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
           <p className='pb-4 pt-2 text-white text-center'>Reactjs</p>
           <Link href={projectUrl}>
               <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>more info</p>
           </Link>
         </div>
      </div>
    );
};

export default ProjectItem;