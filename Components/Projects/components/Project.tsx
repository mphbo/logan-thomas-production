import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React, { ReactComponentElement, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import styles from "../styles/Project.module.scss";
import Link from "next/link";
import CustomCarousel from "../../Carousel/index";
import ProjectModal from "./ProjectModal";
import { Button } from "grommet";

interface IProject {
  title: string;
  summary?: string;
  tech?: string;
  scroll?: (to: number) => void;
  offset: number;
  images?: string[];
  modalImage?: string;
  paragraphs?: string[];
  website: {
    name: string;
    url: string;
  };
}

function Project(props: IProject) {
  const {
    title,
    scroll,
    summary,
    tech,
    offset,
    images,
    paragraphs,
    modalImage,
    website,
  } = props;
  const [open, setOpen] = useState(false);
  const { color } = useThemeContext();

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <ParallaxLayer
        style={{
          backgroundColor: false ? color.primary : color.background,
        }}
        offset={offset}
      >
        <ProjectModal
          open={open}
          setOpen={setOpen}
          modalImage={modalImage}
          paragraphs={paragraphs}
          website={website}
        />
        <div className={styles.project}>
          <h1 style={{ marginBottom: 20 }}>{title}</h1>
          <CustomCarousel images={images} />
          <div className={styles.textContainer}>
            <p>{summary}</p>
            <p>{tech}</p>
            <Button onClick={toggleOpen}>
              <a className={styles.link}>Read More</a>
            </Button>
            <div
              className={styles.arrow}
              style={{
                color: false ? color.background : color.primary,
              }}
              onClick={() => scroll && scroll(offset + 1)}
            >
              &rarr;
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
}

export default Project;
