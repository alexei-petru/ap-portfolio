import { Popover } from "@mantine/core";
import MyPopoverDropDown from "src/components/UI/MyPopoverDropdown/MyPopoverDropdown";
import { StyledPopover } from "src/components/UI/MyPopoverDropdown/MyPopoverDropdown.styled";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import * as St from "./TitleMain.styled";

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
        All projects are fully designed and coded by Alexei Petru
      </MyPopoverDropDown>
    </StyledPopover>
  );
}

export default MainTitle;
