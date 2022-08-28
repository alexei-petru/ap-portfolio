import { StyledContainer } from "styles/Container.styled";
import * as St from "./Footer.styled";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("components/Footer/Map"), { ssr: false });
import { useGetCurrentYear } from "hooks/useGetCurrentYear";
import Form from "components/Footer/Form/Form";

const Footer = () => {
  const currentYear = useGetCurrentYear();
  return (
    <>
      <St.Footer id="contact">
        <StyledContainer>
          <St.FooterTitle>Contact</St.FooterTitle>
          <St.FooterInnerWrapper>
            <Map />
            <Form />
          </St.FooterInnerWrapper>
          <St.footerCopyright>
            {`Designed and developed with ❤ by Alexei Petru. © ${currentYear}`}
          </St.footerCopyright>
        </StyledContainer>
      </St.Footer>
    </>
  );
};

export default Footer;
