import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import styles from "../style/Technology.module.scss";

interface ITechnology {
  title: string;
  text?: string;
  scroll?: (to: number) => void;
  offset: number;
  image?: any;
}

function Technology(props: ITechnology) {
  const { title, scroll, text, offset, image } = props;
  const { color } = useThemeContext();
  return (
    <>
      <ParallaxLayer offset={offset}>
        <div className={styles.technology}>{/* <img src={image} /> */}</div>
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          backgroundColor: offset % 2 === 0 ? color.primary : color.background,
          //   backgroundImage: `url(${image})`,
          //   backgroundBlendMode: "overlay",
          //   backgroundPosition: "center",
          //   backgroundSize: "contain",
          //   backgroundRepeat: "repeat",
        }}
        offset={offset}
      >
        <div className={styles.technology}>
          <img src={image} />
          <p>{text}</p>
          {offset < 12 && (
            <div
              style={{
                color: offset % 2 === 0 ? color.background : color.primary,
              }}
              onClick={() => scroll && scroll(offset + 1)}
            >
              &rarr;
            </div>
          )}
          {offset === 12 && (
            <div
              style={{
                color: offset % 2 === 0 ? color.background : color.primary,
              }}
              onClick={() => scroll && scroll(0)}
            >
              &larr;
            </div>
          )}
        </div>
      </ParallaxLayer>
    </>
  );
}

export default Technology;
