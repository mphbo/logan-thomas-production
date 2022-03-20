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
        text="ahsdffasjdfoiasjdfajsdfio asodjfoaisdjf asoidfj aoisdjf aiosjd foiasd jfopaisd jfopias djfpoasi djfapo isdf jaiosd fjapoisd fajsd iofaj sdoipfj asdif jasoipdf jaisod fjasio dfj asiodfj aiosd fjaoisd jfioas dfja osdf"
        offset={1}
      />
      <Project
        title="Max Merge Solutions"
        text="ahsdffasjdfoiasjdfajsdfio asodjfoaisdjf asoidfj aoisdjf aiosjd foiasd jfopaisd jfopias djfpoasi djfapo isdf jaiosd fjapoisd fajsd iofaj sdoipfj asdif jasoipdf jaisod fjasio dfj asiodfj aiosd fjaoisd jfioas dfja osdf"
        offset={2}
      />
      <Project
        title="Max Merge Solutions"
        text="ahsdffasjdfoiasjdfajsdfio asodjfoaisdjf asoidfj aoisdjf aiosjd foiasd jfopaisd jfopias djfpoasi djfapo isdf jaiosd fjapoisd fajsd iofaj sdoipfj asdif jasoipdf jaisod fjasio dfj asiodfj aiosd fjaoisd jfioas dfja osdf"
        offset={3}
      />
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
