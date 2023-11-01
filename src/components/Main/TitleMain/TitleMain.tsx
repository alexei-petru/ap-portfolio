import { Popover } from "@mantine/core";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import * as St from "./TitleMain.styled";
import { StyledPopover } from "src/components/shared/MyPopoverDropdown/MyPopoverDropdown.styled";
import MyPopoverDropDown from "src/components/shared/MyPopoverDropdown/MyPopoverDropdown";

function MainTitle() {
  const [opened, setOpened] = useState(false);
  return (
    <StyledPopover
      transition={"fade"}
      transitionDuration={450}
      withArrow
      opened={opened}
      onChange={setOpened}
    >
      <St.ProjectsTitleWrapper>
        <St.ProjectsTitle>
          Projects
          <Popover.Target>
            <St.BsInfoWrapper>
              <BsInfoCircle onClick={() => setOpened((prev) => !prev)} />
            </St.BsInfoWrapper>
          </Popover.Target>
        </St.ProjectsTitle>
      </St.ProjectsTitleWrapper>
      <MyPopoverDropDown
        onClickClose={() => setOpened(false)}
        buttonInfoIsEnabled={false}
      >
        All projects are fully coded by Alexei Petru, and almost all are fully
        designed as well.
      </MyPopoverDropDown>
    </StyledPopover>
  );
}

export default MainTitle;
