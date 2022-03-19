import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styles from "./styles/Heading.module.scss";

interface IHeading {
  scroll: () => { void };
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
    <h1 className={styles.title}>
      <p>SITE UNDER CONSTRUCTION</p>
      Welcome to{" "}
      <a className="title" href="http://loganthomas.ca">
        Logan Thomas!
      </a>
      <animated.h1 className={styles.arrow} style={props}>
        <div onClick={scroll}>&darr;</div>
      </animated.h1>
    </h1>
  );
}

export default Heading;
