import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styles from "./styles/Heading.module.scss";
import Typewriter from "typewriter-effect";

interface IHeading {
  scroll: (to: number) => void;
}

function Heading({ scroll }: IHeading) {
  const [flip, set] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 100,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const typewriter = (typewriter: any) => {
    typewriter
      .typeString("Web")
      .pauseFor(1000)
      .deleteAll()
      .typeString("React")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Full Stack")
      .pauseFor(1000)
      .deleteAll()
      .typeString("JavaScript")
      .pauseFor(1000)
      .deleteAll()
      .typeString("TypeScript")
      .pauseFor(1000)
      .deleteAll()
      .typeString("NextJS")
      .pauseFor(1000)
      .deleteAll()
      .start();
  };

  return (
    <ParallaxLayer
      offset={0}
      speed={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.title}>
        <p className={styles.typewriter}>SITE UNDER CONSTRUCTION</p>
        <h1>Logan Thomas </h1>
        <h2 className={styles.developer}>
          <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={typewriter}
          />
          Developer
        </h2>
        <p></p>
        <animated.h1 className={styles.arrow} style={props}>
          <div onClick={() => scroll(1)}>&darr;</div>
        </animated.h1>
      </div>
    </ParallaxLayer>
  );
}

export default Heading;
