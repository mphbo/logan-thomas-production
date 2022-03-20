import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "../style/Technology.module.scss";

interface ITechnology {
  title: string;
  text?: string;
  scroll?: (to: number) => void;
  offset: number;
  image?: string;
}

function Technology(props: ITechnology) {
  const { title, scroll, text, offset, image } = props;
  return (
    <>
      <ParallaxLayer offset={offset}>
        <div className={styles.technology}>
          <h1>{title}</h1>
          {/* <img src={image} /> */}
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          backgroundImage: `url(${image})`,
          //   backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundColor: "#162127",
          backgroundRepeat: "no-repeat",
        }}
        offset={offset}
      >
        <div className={styles.technology}>
          <h1>{title}</h1>
        </div>
      </ParallaxLayer>
    </>
  );
}

export default Technology;
