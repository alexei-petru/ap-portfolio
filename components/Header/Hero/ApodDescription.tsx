import { Popover } from "@mantine/core";
import * as St from "components/Header/Hero/ApodDescription.styled";
import MyPopoverDropDown from "components/UI/MyPopoverDropdown/MyPopoverDropdown";
import { StyledPopover } from "components/UI/MyPopoverDropdown/MyPopoverDropdown.styled";
import Image from "next/image";
import { useState } from "react";
import { IApodData } from "../Header";
// const popoverContent: MyPopoverDropDownProps[] = {
//   dropDownText: "string",
//   buttonClose: " string",
//   buttonInfo: " string,",
// };

interface IApodDescriptionProps extends React.PropsWithChildren {
  headerBackgroundData: IApodData;
}

const ApodDescription = ({ headerBackgroundData }: IApodDescriptionProps) => {
  const [isPopoverOpended, setIsPopoverOpended] = useState(false);
  const isBackgroundImageLoading = headerBackgroundData.url ? false : true;

  return (
    <StyledPopover
      transition={"fade"}
      transitionDuration={450}
      withArrow
      opened={isPopoverOpended}
      onChange={setIsPopoverOpended}
    >
      <St.ApodDescription>
        <St.ApodDescriptionWrapper
          isBackgroundImageLoading={isBackgroundImageLoading}
        >
          <Image
            width={96}
            height={68}
            src={"/planet-purple.png"}
            priority
            alt="apod description"
          />
        </St.ApodDescriptionWrapper>
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
        buttonInfoContent={"FullScreen Image HD"}
        buttonUrl={headerBackgroundData.hdurl}
        onClickClose={() => setIsPopoverOpended(false)}
      >
        {isBackgroundImageLoading && <p>Loading background image...</p>}
        {!isBackgroundImageLoading && (
          <div>
            <p>
              Background Image is offered by
              <St.ApodExternalLink href="https://apod.nasa.gov/apod/">
              &nbsp;&quot;Nasa&nbsp;APOD&quot;&nbsp;
              </St.ApodExternalLink>
              and is called:
              <br />
              {`${headerBackgroundData.title}.`}
            </p>
            {headerBackgroundData.copyright && (
              <p>{`Copyright: ${headerBackgroundData.copyright}.`}</p>
            )}
            {!headerBackgroundData.locale && <p>Is today image Beautiful?</p>}
          </div>
        )}
      </MyPopoverDropDown>
    </StyledPopover>
  );
};

export default ApodDescription;
