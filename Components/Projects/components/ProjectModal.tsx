import * as React from "react";
import { Button, Box, Layer, Text } from "grommet";
import { useThemeContext } from "../../context/ThemeContext";
import Link from "next/link";
import styles from "../styles/ProjectModal.module.scss";
import Image from "next/image";

interface IProjectModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  paragraphs?: string[];
  modalImage?: string;
  website: {
    name: string;
    url: string;
  };
}

export default function ProjectModal(props: IProjectModal) {
  const { open, setOpen, modalImage, paragraphs, website } = props;

  const { color } = useThemeContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const paragraphItems = paragraphs?.map((paragraph, i) => (
    <p key={i}>{paragraph}</p>
  ));

  return (
    <div>
      <Box>
        {open && (
          <Layer
            onEsc={() => setOpen(false)}
            onClickOutside={() => setOpen(false)}
            position="bottom"
            full={true}
            modal={true}
          >
            <div className={styles.outerContentContainer}>
              <div className={styles.contentContainer}>
                <img src={modalImage} />
                {paragraphItems}
              </div>
            </div>
          </Layer>
        )}
      </Box>
      {/* <IconButton
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: 50,
            background: color.primary,
            borderRadius: 0,
            paddingRight: 20,
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton> */}

      {/* <Button
          style={{
            background: color.primary,
            color: color.background,
            borderRadius: 0,
            height: 50,
          }}
        >
          <Link href={website.url}>
            <a className={styles.link} target="_blank">
              {website.name}
            </a>
          </Link>
        </Button> */}
    </div>
  );
}
