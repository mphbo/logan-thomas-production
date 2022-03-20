import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
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
  return (
    <>
      <ParallaxLayer offset={offset}>
        <div className={styles.technology}>{/* <img src={image} /> */}</div>
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          backgroundColor: "#162127",
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
          {/* <h1>{title}</h1> */}
          <p>{text}</p>
          <div onClick={() => scroll && scroll(offset + 1)}>&rarr;</div>
        </div>
      </ParallaxLayer>
    </>
  );
}

export default Technology;
