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
          " - Max Merge Solutions was written in modern frontend technologies. Specifically, TypeScript to secure the application with type safety, Material UI to increase development speed as well as provide consistency, and most importantly the frontend was built with ReactJS for speed, interactivity and to reduce load times.",
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
        scroll={scroll}
        offset={2}
        website={{
          name: "MaxMergeSolutions.com",
          url: "maxmergesolutions.com",
        }}
      />
    </Parallax>
  );
}

export default Projects;
