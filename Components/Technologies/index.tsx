import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import SectionHeading from "../Section/components/SectionHeading";
import Technology from "./components/Technology";
import styles from "../Section/styles/Section.module.scss";
import image from "./images/reactjs-ar21.svg";

function Technologies() {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Parallax ref={parallax} pages={4} horizontal>
      <SectionHeading
        title="Technologies"
        offset={0}
        scroll={() => scroll(1)}
      />
      <Technology title="ReactJs" offset={1} image={image} />
      <img src={image} />
      <Technology
        title=""
        offset={2}
        image="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
      />
      <Technology title="react" offset={3} />
    </Parallax>
  );
}

export default Technologies;
