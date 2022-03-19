import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "./styles/Section.module.scss";

interface ISection {
  title: string;
  down?: string;
  text?: string;
}

function index(props: ISection) {
  const { title, down, text } = props;
  return (
    <Parallax pages={2} horizontal>
      <ParallaxLayer>
        <div className={styles.section}>
          <h1>{title} &rarr;</h1>
          <div>
            <p>Next</p>
            <p>&darr;</p>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer>
        <div className={styles.section}>
          <h1>{title} &rarr;</h1>
          <div>
            <p>Next</p>
            <p>&darr;</p>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default index;
