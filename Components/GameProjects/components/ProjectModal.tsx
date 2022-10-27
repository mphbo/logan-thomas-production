import * as React from "react";
import { Button, Box, Layer, Text } from "grommet";
import { useThemeContext } from "../../context/ThemeContext";
import styles from "../styles/ProjectModal.module.scss";
import Image from "next/image";

interface IProjectModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  paragraphs?: string[];
  modalImage: {
    src: string;
    width: number;
    height: number;
  };
  website: {
    name: string;
    url: string;
  };
}

export default function ProjectModal(props: IProjectModal) {
  const { open, setOpen, modalImage, paragraphs, website } = props;

  const { color } = useThemeContext();

  const handleClose = () => {
    setOpen(false);
  };
  const paragraphItems = paragraphs?.map((paragraph, i) => (
    <p key={i}>{paragraph}</p>
  ));

  console.log(modalImage);
  return (
    <div>
      {open && (
        <Layer
          onEsc={handleClose}
          onClickOutside={handleClose}
          position="bottom"
          full={true}
          modal={true}
        >
          <Button
            style={{
              background: color.primary,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            color={color.background}
            onClick={handleClose}
          >
            Close
          </Button>
          <div className={styles.outerContentContainer}>
            <div className={styles.contentContainer}>
              <div className={styles.image}>
                <Image
                  className={styles.image}
                  layout="responsive"
                  width={modalImage.width}
                  height={modalImage.height}
                  src={modalImage.src}
                />
              </div>
              {paragraphItems}
            </div>
          </div>
          <a href={website.url} target="_blank" rel="noreferrer">
            <Button
              style={{
                background: color.primary,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
              color={color.background}
              onClick={handleClose}
            >
              {website.name}
            </Button>
          </a>
        </Layer>
      )}
    </div>
  );
}
