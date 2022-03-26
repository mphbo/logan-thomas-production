import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../../styles/Home.module.css";
import Heading from "../Heading";
import Section from "../Section";
import Technologies from "../Technologies";
import Projects from "../Projects";
import AboutContact from "../Contact";
import Contact from "../Contact";

function MainPageScroll() {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Parallax pages={4} ref={parallax} style={{ top: "0", left: "0" }}>
      <Heading scroll={scroll} />
      <ParallaxLayer
        offset={1}
        speed={1.5}
        style={{ backgroundColor: "#31afa7" }}
      />

      <ParallaxLayer
        offset={1}
        speed={0.25}
        // onClick={() => scroll(1)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Projects
          scrollUp={() => scroll(0)}
          scrollDown={() => scroll(2)}
          scrollIntoView={() => scroll(1)}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1.5}
        style={{ backgroundColor: "#31afa7" }}
      />

      <ParallaxLayer
        offset={2}
        speed={0.25}
        // onClick={() => scroll(3)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Technologies
          scrollUp={() => scroll(1)}
          scrollDown={() => scroll(3)}
          scrollIntoView={() => scroll(2)}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={1.5}
        style={{ backgroundColor: "#31afa7" }}
      />

      <ParallaxLayer
        offset={3}
        speed={0.25}
        // onClick={() => scroll(3)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Contact scrollUp={() => scroll(2)} scrollIntoView={() => scroll(3)} />
      </ParallaxLayer>
    </Parallax>
  );
}

export default MainPageScroll;
