import Image from "next/image";
import React from "react";
import property from "../public/assets/projects/chatApp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const Project1 = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0  w-screen h-[30vh] lg:h-[40vh] bg-black/60 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={property}
          alt=" /"
        ></Image>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Real time Chat App </h2>
          <h3>React js / styled components / Nodejs authentication</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 pt-8 gap-8">
        <div className="col-span-4">
          <p>Chat buds</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Netlify. Users
            are able chat with other users and also is end to end encryption method is featured.
             users can set avatar and chat. User
            authentication is available so you can signup and signin to your
            account with an email address and authentication is done from backend. Socket io is included.
          </p>
         <Link target="_blank" href="https://real-time-chat-online.netlify.app/"> <button className="px-8 py-2 mt-4 mr-8">Demo</button></Link>
          <Link target="_blank" href="https://github.com/Tasfiq97/real-time-chat-app-react"><button className="px-8 py-2 mt-4 mr-8">Code</button></Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> React js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Styled components
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Node js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Mongodb
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Mongoose
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Socket io
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Context Api
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

export default Project1;
