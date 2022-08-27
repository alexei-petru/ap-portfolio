import { Popover } from "@mantine/core";
import * as St from "components/Header/Hero/Hero.styled";
import MyPopoverDropDown from "components/UI/MyPopover/MyPopover";
import { StyledPopover } from "components/UI/MyPopover/MyPopover.styled";
import Image from "next/image";
import { useState } from "react";

// const popoverContent: MyPopoverDropDownProps[] = {
//   dropDownText: "string",
//   buttonClose: " string",
//   buttonInfo: " string,",
// };

const ApodDescription = () => {
  const [opened, setOpened] = useState(false);

  return (
    <StyledPopover
      transition={"fade"}
      transitionDuration={450}
      withArrow
      opened={opened}
      onChange={setOpened}
    >
      <St.ApodDescription>
        <Image
          style={{ opacity: 0.5 }}
          width={94}
          height={68}
          src={"/planet.png"}
          priority
        />
        <Popover.Target>
          <St.ApodParagraphWrapper onClick={() => setOpened((prev) => !prev)}>
            <St.ApodParagraph>APOD Dynamic Image</St.ApodParagraph>
          </St.ApodParagraphWrapper>
        </Popover.Target>
      </St.ApodDescription>
      <MyPopoverDropDown
        buttonInfoIsEnabled={true}
        buttonInfoContent={"FullDescription"}
      >
        Background Image is ofered by Nasa Apod "Astronomy Picture of the Day"
      </MyPopoverDropDown>
    </StyledPopover>
  );
}; 
 
export default ApodDescription;
