import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import SectionHeading from "../Section/components/SectionHeading";
import Project from "./components/Project";
import ProjectModal from "./components/ProjectModal";

interface IProjects {
  scrollDown: () => void;
  scrollIntoView: () => void;
}

function Projects(props: IProjects) {
  const { scrollDown, scrollIntoView } = props;
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Parallax ref={parallax} pages={4} horizontal>
      <SectionHeading
        title="Web Projects"
        offset={0}
        scroll={() => scroll(1)}
        scrollDown={scrollDown}
        scrollIntoView={scrollIntoView}
      />
      <Project
        title="Max Merge Solutions"
        summary="A document handling tool for mortgage professionals."
        tech="Built with a React and Typescript user interface and a .NET backend."
        images={[
          "/max-merge/1.png",
          "/max-merge/2.png",
          "/max-merge/3.png",
          "/max-merge/4.png",
          "/max-merge/5.png",
          "/max-merge/6.png",
        ]}
        modalImage={"/max-merge/7.webp"}
        scroll={scroll}
        offset={1}
        paragraphs={[
          " - Max Merge Solutions is a premium service tailored to mortgage broker professionals with a serious entourage of specialized tools. The main feature being the high end document merge process which can merge all of your documents into one, compress them and send customized emails. Users can also use the highly effective year to date calculator to calculate finances.",
          "- Max Merge Solutions was written in modern frontend technologies. Specifically, TypeScript to secure the application with type safety, Material UI to increase development speed as well as provide consistency, and most importantly the frontend was built with ReactJS for speed, interactivity and to reduce load times.",
          "- The backend was build in the robost .NET framework with strong api design principles to protect users and the database.",
        ]}
        website={{
          name: "MaxMergeSolutions.com",
          url: "https://maxmergesolutions.com",
        }}
      />
      <Project
        title="Better Place"
        summary="Better Place is a social media platform for volunteers to help people that are in need."
        tech="A React interface with Node backend and PostgreSQL database."
        images={[
          "/better-place/1.png",
          "/better-place/2.png",
          "/better-place/3.png",
          "/better-place/4.png",
        ]}
        modalImage={"/better-place/5.png"}
        scroll={scroll}
        offset={2}
        paragraphs={[
          " - A platform where users can come to browse opportunities to volunteer, or create opportunities for others. A user can view opportunities which can then be sorted, filtered and viewed in two formats; a list view, or a map view. Once a user sees an opportunity they like they then can contact the creator directly or sign up for the opportunity.",
          " - Better Place is a complex application built with React in the front end, Express/Node in the backend with a PostgreSQL database. Material UI and Ant Design components were used.",
          " - Googles map API as well as a custom created chat was built into the application with the use of web sockets for live communication.",
        ]}
        website={{
          name: "Check it out on Github",
          url: "https://github.com/mphbo/better-place",
        }}
      />
      <Project
        title="Scheduler"
        summary="Scheduler is a scheduling application for students and teachers."
        tech="A React interface with Node backend and PostgreSQL database."
        images={[
          "/scheduler/1.png",
          "/scheduler/2.png",
          "/scheduler/3.png",
          "/scheduler/4.png",
        ]}
        modalImage={"/scheduler/5.png"}
        scroll={scroll}
        offset={3}
        paragraphs={[
          " - A platform where users can come to browse opportunities to volunteer, or create opportunities for others. A user can view opportunities which can then be sorted, filtered and viewed in two formats; a list view, or a map view. Once a user sees an opportunity they like they then can contact the creator directly or sign up for the opportunity.",
          " - Better Place is a complex application built with React in the front end, Express/Node in the backend with a PostgreSQL database. Material UI and Ant Design components were used.",
          " - Googles map API as well as a custom created chat was built into the application with the use of web sockets for live communication.",
        ]}
        website={{
          name: "Check it out on Github",
          url: "https://github.com/mphbo/better-place",
        }}
      />
    </Parallax>
  );
}

export default Projects;
