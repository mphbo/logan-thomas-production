import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import SectionHeading from "../Section/components/SectionHeading";
import Project from "./components/Project";

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
        tech="A React with Typescript user interface with .NET backend."
        images={[
          "/max-merge/1.png",
          "/max-merge/2.png",
          "/max-merge/3.png",
          "/max-merge/4.png",
          "/max-merge/5.png",
          "/max-merge/6.png",
        ]}
        offset={1}
      />
      {/* <Project title="Max Merge Solutions" offset={2} />
      <Project title="Max Merge Solutions" offset={3} /> */}
      {/* <Technology title="ReactJs" offset={1} />
      <Technology
        title=""
        offset={2}
        image="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
      />
      <Technology title="react" offset={3} /> */}
    </Parallax>
  );
}

export default Projects;
