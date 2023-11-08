import styled from "@emotion/styled";
import { StyledTitleSection } from "src/styles/StyledReusable.styled";
import Image from "next/image";
import {
  var_ContactItemHeight,
  var_ContactItemWidth,
} from "src/constants/cssVariables";

export const Footer = styled.footer``;

export const FooterTitle = styled(StyledTitleSection)`
  padding: 17px 0 25px 0;
`;

export const FooterInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 60px 50px 40px;
`;

export const StyledImage = styled(Image)`
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  filter: blur(4px);
  border-radius: 5px;
`;

export const MapFormFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 50px;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const MapWrapper = styled.div`
  width: ${var_ContactItemWidth};
  height: ${var_ContactItemHeight};
`;

export const footerCopyright = styled.p`
  text-align: center;
  font: var(--text-regular-pre-large);
  margin-top: 50px;
  width: 100%;
`;
