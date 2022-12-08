import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

function Project() {
  return (
    <div id="Projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase">
          Projects
        </p>
        <h2 className="py-4">What I have build</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="PropertyFinder"
            backgroundImg={propertyImg}
            projecturl="/property"
          />
          <ProjectItem
            title="PropertyFinder"
            backgroundImg={propertyImg}
            projecturl="/property"
          />
          <ProjectItem
            title="PropertyFinder"
            backgroundImg={propertyImg}
            projecturl="/property"
          />
          <ProjectItem
            title="PropertyFinder"
            backgroundImg={propertyImg}
            projecturl="/property"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
