import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styles from "./styles/Heading.module.scss";

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
      <h1 className={styles.title}>
        <p>SITE UNDER CONSTRUCTION</p>
        Welcome to <a className="title">Logan Thomas!</a>
        <animated.h1 className={styles.arrow} style={props}>
          <div onClick={() => scroll(1)}>&darr;</div>
        </animated.h1>
      </h1>
    </ParallaxLayer>
  );
}

export default Heading;
