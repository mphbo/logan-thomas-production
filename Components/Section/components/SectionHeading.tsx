import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "../../Section/styles/Section.module.scss";

interface ISectionHeading {
  title: string;
  scroll?: () => void;
  offset: number;
}

function SectionHeading(props: ISectionHeading) {
  const { title, scroll } = props;
  return (
    <ParallaxLayer offset={0}>
      <div className={styles.section}>
        <h1 onClick={scroll}>{title} &rarr;</h1>
        <div>
          <p>Next</p>
          <p>&darr;</p>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default SectionHeading;
