import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import styles from "../../Technologies/style/Technology.module.scss";

interface IProject {
  title: string;
  text?: string;
  scroll?: (to: number) => void;
  offset: number;
  image?: any;
}

function Project(props: IProject) {
  const { title, scroll, text, offset, image } = props;
  const { color } = useThemeContext();
  return (
    <>
      <ParallaxLayer offset={offset}>
        <div className={styles.technology}></div>
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          backgroundColor: offset % 2 === 0 ? color.primary : color.background,
        }}
        offset={offset}
      >
        <div className={styles.technology}>
          <img src={image} />
          <p>{text}</p>
          <div
            style={{
              color: offset % 2 === 0 ? color.background : color.primary,
            }}
            onClick={() => scroll && scroll(offset + 1)}
          >
            &rarr;
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
}

export default Project;
