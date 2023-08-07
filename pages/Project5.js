import React from 'react';
import Image from "next/image";
import job from "../public/assets/projects/Job-search.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Project5 = () => {
    return (
        <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0  w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={job}
          alt=" /"
        ></Image>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Job search </h2>
          <h3>React js / RTK query / vercel</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 pt-8 gap-8">
        <div className="col-span-4">
          <p>Job search</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Vercel. User can search any kinds of job and also can apply realtime.User can also be an employee and post jobs.User authentication is done using firebase auth.
          </p>
          <Link target="_blank" href="https://github.com/Tasfiq97/JOBSEARCH-FRONTEND"><button className="px-8 py-2 mt-4 mr-8">Code</button></Link>
          <Link target="_blank" href="https://jobseacrh-full.vercel.app/"><button className="px-8 py-2 mt-4 mr-8">Demo</button></Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1" >
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> React js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Tailwind css
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> RTK query
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Node js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>

            </div>
          </div>
        </div>
        <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
        </Link>
      </div> 
    </div>
    );
};

export default Project5;