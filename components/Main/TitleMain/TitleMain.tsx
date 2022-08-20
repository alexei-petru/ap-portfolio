import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";
import { useRef, useState } from "react";
import { BsInfoCircle, BsEmojiSmile } from "react-icons/bs";
import * as St from "./TitleMain.styled";

const MainTitle = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const titleInfoClickHandler = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClickAway = () => {
    setOpen(false);
  };

  const arrowRef = useRef(null);

  return (
    <St.ProjectsTitleWrapper>
      <St.ProjectsTitle ref={arrowRef}>
        Projects
        <ClickAwayListener onClickAway={handleClickAway}>
          <St.BsInfoWrapper>
            <BsInfoCircle onClick={titleInfoClickHandler} />
            <Box sx={{ position: "relative" }}>
              <Popper
                style={{ padding: "5px" }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={250}>
                    <St.BsInfoText>
                      All projects are fully designed "dont judge too hard
                      <BsEmojiSmile />" and coded by Alexei Petru
                    </St.BsInfoText>
                  </Fade>
                )}
              </Popper>
            </Box>
          </St.BsInfoWrapper>
        </ClickAwayListener>
      </St.ProjectsTitle>
    </St.ProjectsTitleWrapper>
  );
};

export default MainTitle;
