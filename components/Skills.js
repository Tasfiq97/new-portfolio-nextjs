import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import skill1 from "../public/assets/skills/html.png"
import skill2 from "../public/assets/skills/css.png"
import skill3 from "../public/assets/skills/javascript.png"
import skill4 from "../public/assets/skills/firebase.png"
import skill5 from "../public/assets/skills/github1.png"
import skill6 from "../public/assets/skills/node.png"
import skill7 from "../public/assets/skills/mongo.png"
import skill8 from "../public/assets/skills/tailwind.png"
import skill9 from "../public/assets/skills/react.png"
import skill10 from "../public/assets/skills/nextjs.png"
import skill11 from "../public/assets/skills/redux.png"
import skill12 from "../public/assets/skills/typescript.png"
import skill13 from "../public/assets/skills/expressjs.png"
import skill14 from "../public/assets/skills/Socket-io.png"
import skill15 from "../public/assets/skills/materialuipng.png"
import skill16 from "../public/assets/skills/vercel.png"
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 snap-mandatory snap-y">
      <div
       
       className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-[15px] uppercase text-[#c9c7f0]">
          Skills
        </p>
        <h2 className="text-[#adefd1ff] mb-2">What I Know</h2>
        <motion.div 
         initial={{
          x:-200,
          opacity:0,
         }}
         transition={{duration:1}}
         whileInView={{opacity:1,x:0}}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div 
         
          className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill1}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Html</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill2}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill3}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill4}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill5}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill6}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Node</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill7}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">MongoDb</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill8}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Tailwindcss</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill9}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">React js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill10}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Next js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill11}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Redux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill2}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill13}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Express js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill14}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Socket io</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill15}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Material ui</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#c5f6e0]">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  width="64"
                  height="64"
                  src={skill16}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black uppercase">Vercel</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
