import Image from "next/image";
import React from "react";
import drone from "../public/assets/projects/drone-app.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const project2 = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0  w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={drone}
          alt=" /"
        ></Image>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Drone/ Buy /Order </h2>
          <h3>React js / material ui / firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 pt-8 gap-8">
        <div className="col-span-4">
          <p>Deskadian drone</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and material ui and is hosted on Firebase. Users
            are able to search drones based on many price range, and can add to the user dashboard. Users
            can update and delete his/hers orders and also can give ratings and reviews. Users can signup with google or using email. Admin has all the excess of the all the users orders. He can change the status or can delete or update. Admin can also have the access to make anyone admin. 
          </p>
          <Link target="_blank" href="https://niche-project-drone.web.app/"><button className="px-8 py-2 mt-4 mr-8">Code</button></Link>
          <Link target="_blank" href="https://github.com/Tasfiq97/react-drone-shop-client-firebase"><button className="px-8 py-2 mt-4 mr-8">Demo</button></Link>
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
                <RiRadioButtonFill className="pr-1" /> Material ui
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Node js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Mongodb
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Express js
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Context-Api
              </p>
              <p className="text-gray-200 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Jwt token
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

export default project2;
