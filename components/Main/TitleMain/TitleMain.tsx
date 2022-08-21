import { useState } from "react";
import { Popover } from "@mantine/core";
import { BsEmojiSmile, BsInfoCircle } from "react-icons/bs";
import * as St from "./TitleMain.styled";
import {
  StyledPopover,
  StyledPopoverDropdown,
} from "styles/StyledPopover.styled";

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
      <StyledPopoverDropdown>
        <St.BsInfoText>
          All projects are fully designed "dont judge too hard
          <BsEmojiSmile />" and coded by Alexei Petru
        </St.BsInfoText>
      </StyledPopoverDropdown>
    </StyledPopover>
  );
}

export default MainTitle;

// <St.ProjectsTitleWrapper>
// <St.ProjectsTitle>
//   Projects
//   <St.BsInfoWrapper>
//     <Popover withArrow opened={opened} onChange={setOpened}>
//       <Popover.Dropdown>
//         <St.BsInfoText>
//           All projects are fully designed "dont judge too hard
//           <BsEmojiSmile />" and coded by Alexei Petru
//         </St.BsInfoText>
//       </Popover.Dropdown>
//       <Popover.Target>
//         <BsInfoCircle onClick={() => setOpened((prev) => !prev)} />
//       </Popover.Target>
//     </Popover>
//   </St.BsInfoWrapper>
// </St.ProjectsTitle>
// </St.ProjectsTitleWrapper>
