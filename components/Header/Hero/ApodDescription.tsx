import { Popover } from "@mantine/core";
import * as St from "components/Header/Hero/Hero.styled";
import MyPopoverDropDown from "components/UI/MyPopoverDropdown/MyPopoverDropdown";
import { StyledPopover } from "components/UI/MyPopoverDropdown/MyPopoverDropdown.styled";
import Image from "next/image";
import { useState } from "react";

// const popoverContent: MyPopoverDropDownProps[] = {
//   dropDownText: "string",
//   buttonClose: " string",
//   buttonInfo: " string,",
// };

const ApodDescription = () => {
  const [isPopoverOpended, setIsPopoverOpended] = useState(false);

  return (
    <StyledPopover
      transition={"fade"}
      transitionDuration={450}
      withArrow
      opened={isPopoverOpended}
      onChange={setIsPopoverOpended}
    >
      <St.ApodDescription>
        <Image
          style={{ opacity: 0.5 }}
          width={94}
          height={68}
          src={"/planet.png"}
          priority
          alt="apod description"
        />
        <Popover.Target>
          <St.ApodParagraphWrapper
            onClick={() => setIsPopoverOpended((prev) => !prev)}
          >
            <St.ApodParagraph>APOD Dynamic Image</St.ApodParagraph>
          </St.ApodParagraphWrapper>
        </Popover.Target>
      </St.ApodDescription>
      <MyPopoverDropDown
        buttonInfoIsEnabled={true}
        buttonInfoContent={"FullDescription"}
        onClickClose={() => setIsPopoverOpended(false)}
      >
        Background Image is offered by Nasa Apod &quot;Astronomy Picture of the
        Day&quot;
      </MyPopoverDropDown>
    </StyledPopover>
  );
};

export default ApodDescription;
