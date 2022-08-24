import { StyledContainer } from "styles/Container.styled";
import * as St from "./Footer.styled";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("components/Footer/Map"), { ssr: false });

const Footer = () => {
  return (
    <>
      <St.Footer>
        <StyledContainer>
          <St.FooterTitle>Contact</St.FooterTitle>
          <St.FooterInnerWrapper>
            <Map />
          </St.FooterInnerWrapper>
        </StyledContainer>
      </St.Footer>
    </>
  );
};

export default Footer;
