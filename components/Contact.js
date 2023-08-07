import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { motion } from "framer-motion"
import img from "../public/assets/1638089535060 (2).jpg"
const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen snap-mandatory snap-y">
      <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
        <p className="text-xl tracking-[15px] uppercase text-[#d2d1eb]">
          Contact
        </p>
        <h2 className="py-4 text-[#adefd1ff]">Get in Contact</h2>
        <div className="grid lg:grid-cols-5 gap-8 mt-10">
          <motion.div 
          className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover-scale-105 ease-in duration-300"
                  width="400"
                  height="400"
                  src={img}
                  alt="/"
                ></Image>
              </div>
              <div>
                <h2 className="py-2">Tasfiqul Azad</h2>
                <p>Developer</p>
                <p className="py-4">I am available for full time position</p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect With me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/tasfiqul-azad/"
                    >
                      <FaLinkedinIn className="text-2xl" />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link target="_blank" href="https://github.com/Tasfiq97">
                      <FaGithub className="text-2xl" />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      target="_blank"
                      href="mailto:tasfiqulazad200@gmail.com"
                    >
                      {" "}
                      <AiOutlineMail className="text-2xl" />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link target="_blank" href="tel:+8801832214481">
                      {" "}
                      <BsFillPersonLinesFill className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* right  */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ">
            <div className="p-4">
              <form action="https://formspree.io/f/xnqyvadz" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2"> Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2"> Number</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="number"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2"> Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="text"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2"> Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2"> Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-black"
                    rows="10"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button className="w-full p-4 text-black mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-[#5651e5]"
                size={30}
              ></HiOutlineChevronDoubleUp>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
