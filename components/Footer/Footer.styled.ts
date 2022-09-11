import styled from "@emotion/styled";
import { StyledTitleSection } from "styles/StyledReusable.styled";
import Image from "next/image";

export const Footer = styled.footer``;

export const FooterTitle = styled(StyledTitleSection)``;

export const FooterInnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 565px;
  align-items: start;

  @media (max-width: 735px) {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    align-items: center;
    height: calc(var(--contact-item-size) * 2 + 125px);
  }
  /* :before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    border-radius: 5px;
    background: url("/ufo-background.png") no-repeat center 10%;
    background-size: clamp(1000px, calc(2048px - 100vw), 1800px);
  } */
`;

export const StyledImage = styled(Image)`
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  border-radius: 5px;
  background: url("/ufo-background.png") no-repeat center 10%;
  background-size: clamp(1000px, calc(2048px - 100vw), 1800px);
`;

export const footerCopyright = styled.p`
  text-align: center;
  padding-bottom: 16px;
  font: var(--text-regular-small);
  position: absolute;
  bottom: 6px;
`;
