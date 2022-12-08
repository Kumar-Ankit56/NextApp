import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import Link from "next/link";

function ProjectItem(props) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl  p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={props.backgroundImg}
        alt="/"
      />

      <div className="hidden group-hover:block absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center text-white ">
          {props.title}
        </h3>
        <p className="pt-2 pb-4 text-center text-white ">Lorem ipsum dolor</p>
        <Link href={props.projecturl}>
          <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
