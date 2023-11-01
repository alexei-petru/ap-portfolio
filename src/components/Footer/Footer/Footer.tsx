import { StyledContainer } from "src/styles/Container.styled";
import * as St from "./Footer.styled";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("src/components/Footer/Map/Map"), {
  ssr: false,
});
import { useGetCurrentYear } from "src/hooks/useGetCurrentYear";
import Form from "src/components/Footer/Form/Form";

const Footer = () => {
  const currentYear = useGetCurrentYear();
  return (
    <>
      <St.Footer id="contact">
        <StyledContainer>
          <St.FooterTitle>Contact</St.FooterTitle>
          <St.FooterInnerWrapper>
            <St.StyledImage
              alt=""
              src={"/ufo-background.png"}
              layout={"fill"}
              priority
            />
            <St.MapFooterWrapper>
              <Map />
              <Form />
              </St.MapFooterWrapper>
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
