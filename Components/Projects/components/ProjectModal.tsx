import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useThemeContext } from "../../context/ThemeContext";
import { Icon } from "@mui/material";
import Link from "next/link";

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

  const paragraphItems = paragraphs?.map((paragraph) => <p>{paragraph}</p>);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
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
        <div
          style={{
            height: "100%",
            width: "100%",
            background: color.background,
            color: "white",
            padding: "0 10% 0 10%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* <h1>Max Merge Solutions</h1> */}
          <img
            style={{ width: "90%", height: "auto", marginBottom: 20 }}
            src={modalImage}
          />
          {paragraphItems}
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
            <a target="_blank">{website.name}</a>
          </Link>
        </Button>
      </Dialog>
    </div>
  );
}
