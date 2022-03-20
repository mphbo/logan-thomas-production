import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import SectionHeading from "../Section/components/SectionHeading";
import Technology from "./components/Technology";
import Image from "next/image";

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
      <Technology
        title=""
        text="Build structured, organized reusable components in complex single page applications with advanced React concepts such as React Router, useContext, and state management tools."
        offset={1}
        image={"/reactjs-ar21.svg"}
        scroll={scroll}
      />
      <Technology
        title="NextJs"
        text="Take advantage and use the powerful features included in NextJs built on top of React such as prerendering and server side rendering. Boost SEO and speed, with the power of NextJs."
        offset={2}
        image="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        scroll={scroll}
      />
      <Technology title="react" offset={3} />
    </Parallax>
  );
}

export default Technologies;
