import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "../../Section/styles/Section.module.scss";

interface ISectionHeading {
  title: string;
  scroll?: () => void;
  offset: number;
  scrollDown?: () => void;
  scrollIntoView?: () => void;
}

function SectionHeading(props: ISectionHeading) {
  const { title, scroll, scrollDown, scrollIntoView } = props;
  return (
    <ParallaxLayer offset={0}>
      <div className={styles.section}>
        <h1 onClick={scroll}>{title} &rarr;</h1>
        <div onClick={scrollDown}>
          <p>Next</p>
          <p>&darr;</p>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default SectionHeading;
