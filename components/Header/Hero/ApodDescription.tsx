import { Popover } from "@mantine/core";
import * as St from "components/Header/Hero/Hero.styled";
import Image from "next/image";
import { useState } from "react";
import {
  StyledPopover,
  StyledPopoverDropdown,
} from "styles/StyledPopover.styled";

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
        />
        <Popover.Target>
          <St.ApodParagraphWrapper onClick={() => setOpened((prev) => !prev)}>
            <St.ApodParagraph>APOD Dynamic Image</St.ApodParagraph>
          </St.ApodParagraphWrapper>
        </Popover.Target>
      </St.ApodDescription>

      <StyledPopoverDropdown>
        <St.ApodDropdownText>
          Background Image is ofered by Nasa Apod "Astronomycal image of the day"
          <St.ButtonApodDropdown >
            Full Description
          </St.ButtonApodDropdown>
        </St.ApodDropdownText>
      </StyledPopoverDropdown>
    </StyledPopover>
  );
};

export default ApodDescription;
