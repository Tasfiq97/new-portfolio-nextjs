import Image from "next/image";
import Link from "next/link";
import React from "react";
import chatApp from "../public/assets/projects/chatApp.png";
import dronImg from "../public/assets/projects/drone-app.png";
import ecommerceImg from "../public/assets/projects/e-commerce.png";
import annotationImg from "../public/assets/projects/videoannotatioonProject.png";
import jobsearchImg from "../public/assets/projects/Job-search.png";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full snap-mandatory snap-y ">
      <div className="max-w-[1240px] mx-auto px-2 my-16">
        <p className="text-xl tracking-[15px] uppercase text-[#d2d1eb]">
          projects
        </p>
        <h2 className="text-[#adefd1ff]">What i have built</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <ProjectItem
            title="Chat app"
            background={chatApp}
            projectUrl="/Project1"
          ></ProjectItem>
          <ProjectItem
            title="Drone App"
            background={dronImg}
            projectUrl="/project2"
          ></ProjectItem>
          <ProjectItem
            title="E-commerce app"
            background={ecommerceImg}
            projectUrl="/project3"
          ></ProjectItem>
          <ProjectItem
            title="Video annotation app"
            background={annotationImg}
            projectUrl="/project4"
          ></ProjectItem>
          <ProjectItem
            title="Job Search"
            background={jobsearchImg}
            projectUrl="/Project5"
          ></ProjectItem>
        </div>
      </div>
    </div>
  );
};

export default Projects;
