import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "../../Section/styles/Section.module.scss";

interface ISectionHeading {
  title: string;
  scroll?: () => void;
  offset: number;
  scrollDown?: () => void;
  scrollUp?: () => void;
  scrollIntoView?: () => void;
  previous: string;
  next: string;
}

function SectionHeading(props: ISectionHeading) {
  const {
    title,
    previous,
    next,
    scroll,
    scrollDown,
    scrollUp,
    scrollIntoView,
  } = props;
  return (
    <ParallaxLayer offset={0}>
      <div className={styles.section}>
        <div onClick={scrollUp}>
          <p className={styles.arrow}>&uarr;</p>
          <p>{previous}</p>
        </div>
        <h1 className={styles.arrow} onClick={scroll}>
          {title} &rarr;
        </h1>
        <div onClick={scrollDown}>
          <p>{next}</p>
          <p className={styles.arrow}>&darr;</p>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default SectionHeading;
