import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center p-2">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, I'm <span className="text-[#5651e5]">Ankit</span> Kumar
          </h1>
          <h1>I'm Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            maiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eaque, laboriosam.
          </p>
          <div className="flex max-w-[330px] items-center justify-between m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-115 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-115 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiFillMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsPersonPlusFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
