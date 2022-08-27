import { Popover } from "@mantine/core";
import MyPopoverDropDown from "components/UI/MyPopover/MyPopover";
import { StyledPopover } from "components/UI/MyPopover/MyPopover.styled";
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
      <MyPopoverDropDown buttonInfoIsEnabled={false}>
        All projects are fully designed and coded by Alexei Petru
      </MyPopoverDropDown>
    </StyledPopover>
  );
}

export default MainTitle;
