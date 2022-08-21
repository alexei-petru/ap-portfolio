import { Button, Popover } from "@mantine/core";
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
      <Popover.Target>
        <St.ApodDescription onClick={() => setOpened((prev) => !prev)}>
          <Image
            style={{ opacity: 0.5 }}
            width={94}
            height={68}
            src={"/planet.png"}
          />
          <St.ApodParagraphWrapper>
            <St.ApodParagraph>APOD Dynamic Image</St.ApodParagraph>
          </St.ApodParagraphWrapper>
        </St.ApodDescription>
      </Popover.Target>

      <StyledPopoverDropdown>
        <div>Image description</div>
      </StyledPopoverDropdown>
    </StyledPopover>
  );
};

export default ApodDescription;
