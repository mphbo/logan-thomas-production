import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useThemeContext } from "../../context/ThemeContext";
import Link from "next/link";
import styles from "../styles/ProjectModal.module.scss";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{ background: "#162127" }}
      >
        <IconButton
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
        </IconButton>
        <div className={styles.outerContentContainer}>
          <div className={styles.contentContainer}>
            <img src={modalImage} />
            {paragraphItems}
          </div>
        </div>

        <Button
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
        </Button>
      </Dialog>
    </div>
  );
}
