import { Popover } from "@mantine/core";
import * as St from "src/components/Hero/ApodDescription/ApodDescription.styled";
import MyPopoverDropDown from "src/components/shared/MyPopoverDropdown/MyPopoverDropdown";
import { StyledPopover } from "src/components/shared/MyPopoverDropdown/MyPopoverDropdown.styled";
import Image from "next/image";
import { useState } from "react";
import { IApodData } from "../../EntrySection/EntrySection";
import { BREAKPOINTS_APP } from "src/constants-types/constants";

interface IApodDescriptionProps extends React.HTMLProps<HTMLDivElement> {
  headerBackgroundData: IApodData;
}

const ApodDescription = ({
  headerBackgroundData,
  className,
}: IApodDescriptionProps) => {
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
      <St.ApodDescription className={className}>
        <St.ApodDescriptionInner
          isBackgroundImageLoading={isBackgroundImageLoading}
        >
          <St.ApodImageWrapper
            isBackgroundImageLoading={isBackgroundImageLoading}
          >
            <Image
              width={100}
              height={100}
              src={"/planet-purple.png"}
              priority={true}
              alt="apod description"
              style={{ objectFit: "contain" }}
              sizes={`
              (max-width: ${BREAKPOINTS_APP.mobileMedium}) 100vw,
               (max-width: ${BREAKPOINTS_APP.tabletLandscape}) 30vw,
                10vw`}
            />
          </St.ApodImageWrapper>
          <Popover.Target>
            <St.ApodButton onClick={() => setIsPopoverOpended((prev) => !prev)}>
              <St.ApodButtonText>APOD Dynamic Image</St.ApodButtonText>
            </St.ApodButton>
          </Popover.Target>
        </St.ApodDescriptionInner>
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
