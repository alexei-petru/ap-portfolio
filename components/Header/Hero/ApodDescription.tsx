import React from "react";
import * as St from "components/Header/Hero/Hero.styled";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";
import { useState } from "react";
import Image from "next/image";

const ApodDescription = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const targetInfoClickHandler = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <St.ApodDescription>
        <Image
          style={{ opacity: 0.5 }}
          width={94}
          height={68}
          src={"/planet.png"}
        />
        <St.ApodParagraphWrapper>
          <St.ApodParagraph onClick={targetInfoClickHandler}>
            APOD Dynamic Image
          </St.ApodParagraph>
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
                  {/* #refactor */}
                  <p>Image description</p>
                </Fade>
              )}
            </Popper>
          </Box>
        </St.ApodParagraphWrapper>
      </St.ApodDescription>
    </ClickAwayListener>
  );
};

export default ApodDescription;
