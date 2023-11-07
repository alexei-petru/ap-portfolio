import { StyledContainer } from "src/styles/Container.styled";
import * as St from "./Footer.styled";
import Image from "next/image";
import Form from "src/components/Footer/Form/Form";
import { BREAKPOINTS_APP } from "src/constants/constants";
import { useGetCurrentYear } from "src/hooks/useGetCurrentYear";

const Footer = () => {
  const currentYear = useGetCurrentYear();
  return (
    <>
      <St.Footer id="contact">
        <St.FooterBackground
          alt=""
          src={"/ufo-background.png"}
          priority
          fill
          sizes={`max-width: ${BREAKPOINTS_APP.laptopMedium} 100vw, 50vw`}
        />
        <StyledContainer>
          <St.FooterInnerWrapper>
            <St.FooterTitle>Contact</St.FooterTitle>
            <St.MapFormFooterWrapper>
              <St.MapWrapper>
                <Image
                  fill
                  quality={100}
                  alt="location"
                  src={"/location.png"}
                  sizes={`max-width: ${BREAKPOINTS_APP.laptopMedium} 100vw, 50vw`}
                />
              </St.MapWrapper>
              <Form />
            </St.MapFormFooterWrapper>
            <St.footerCopyright>
              {`Designed and developed with ❤ by Alexei Petru. © ${currentYear}`}
            </St.footerCopyright>
          </St.FooterInnerWrapper>
        </StyledContainer>
      </St.Footer>
    </>
  );
};

export default Footer;
