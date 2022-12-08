import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleSadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleSadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div
        className={
          shadow ? "fixed w-full h-20 shadow-xl " : "fixed w-full h-20 "
        }
      >
        <div className="flex items-center justify-between w-full px-2 2xl:px-16">
          <Image src="/assets/navLogo.png" alt="/" width="80" height="30" />
          <div>
            <ul className="hidden md:flex ">
              <Link href="/#About">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#Skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skill
                </li>
              </Link>
              <Link href="/#Projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Project
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !nav
            ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            !nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%]  md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500 z-50"
              : "fixed left-[-100%] p-7 ease-in duration-500 z-50"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image src="/assets/navLogo.png" alt="/" width="70" height="20" />
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something together
              </p>
            </div>
          </div>
          <div className="flex flex-col py-2">
            <ul className="uppercase ">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">SKills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Project</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-12">
              <p className="uppercase tracking-wide text-[#5651e5]">
                Let's Contect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaGithub />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <AiFillMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <BsPersonPlusFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
