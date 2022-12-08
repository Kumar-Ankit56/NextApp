import React from "react";
import Image from "next/image";

function Skill() {
  return (
    <div id="Skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skill
        </p>
        <h2>What I can do</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/aws.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Aws</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
