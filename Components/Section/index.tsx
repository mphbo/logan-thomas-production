import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import styles from "./styles/Section.module.scss";

interface ISection {
  title: string;
  down?: string;
  text?: string;
  nextScroll?: () => void;
}

function index(props: ISection) {
  const { title, down, text, nextScroll } = props;
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Parallax pages={2} ref={parallax} horizontal>
      <ParallaxLayer offset={0} onClick={() => scroll(1)}>
        <div className={styles.section}>
          <h1>{title} &rarr;</h1>
          <div>
            <p>Next</p>
            <p>&darr;</p>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} onClick={() => scroll(0)}>
        <div className={styles.section}>
          <h1>{title} &rarr;</h1>
          <div onClick={nextScroll}>
            <p>Next</p>
            <p>&darr;</p>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default index;
