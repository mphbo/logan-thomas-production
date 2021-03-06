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
  modalImage?: {
    src: string;
    width: number;
    height: number;
  };
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
        {modalImage && (
          <ProjectModal
            open={open}
            setOpen={setOpen}
            modalImage={modalImage}
            paragraphs={paragraphs}
            website={website}
          />
        )}
        <div className={styles.project}>
          <h1 style={{ textAlign: "center" }}>{title}</h1>
          <CustomCarousel images={images} />
          <div className={styles.textContainer}>
            <p>{summary}</p>
            <p>{tech}</p>
            <Button style={{ margin: "15px 0 10px 0" }} onClick={toggleOpen}>
              {modalImage && <a className={styles.link}>Read More</a>}
              {!modalImage && (
                <a
                  href={website.url}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.link}
                >
                  {website.name}
                </a>
              )}
            </Button>
            {offset < 4 && (
              <div
                className={styles.arrow}
                style={{
                  color: false ? color.background : color.primary,
                }}
                onClick={() => scroll && scroll(offset + 1)}
              >
                &rarr;
              </div>
            )}
            {offset === 4 && (
              <div
                className={styles.arrow}
                style={{
                  color: false ? color.background : color.primary,
                }}
                onClick={() => scroll && scroll(0)}
              >
                &larr;
              </div>
            )}
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
}

export default Project;
