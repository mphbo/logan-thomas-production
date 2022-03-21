import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";
import { useThemeContext } from "../../context/ThemeContext";
import styles from "../styles/Project.module.scss";
import Link from "next/link";
import CustomCarousel from "../../Carousel/index";

interface IProject {
  title: string;
  summary?: string;
  tech?: string;
  scroll?: (to: number) => void;
  offset: number;
  images?: string[];
}

function Project(props: IProject) {
  const { title, scroll, summary, tech, offset, images } = props;
  const { color } = useThemeContext();
  return (
    <>
      <ParallaxLayer
        style={{
          backgroundColor: offset % 2 === 0 ? color.primary : color.background,
        }}
        offset={offset}
      >
        <div className={styles.project}>
          <CustomCarousel images={images} />
          {/* <img src={image} /> */}
          {/* <p>{title}</p> */}
          <p>Summary: {summary}</p>
          <p>Built with: {tech}</p>
          {/* <Link href="/">Read More:</Link> */}
          <br />
          <a target="_blank" href="https://maxmergesolutions.com/">
            Go to Website
          </a>
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
