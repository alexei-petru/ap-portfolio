import styled from "@emotion/styled";
import { StyledTitleSection } from "src/styles/StyledReusable.styled";
import Image from "next/image";
import {
  var_ContactItemHeight,
  var_ContactItemWidth,
} from "src/constants/cssVariables";
import { MAX_DEVICE_HEIGHT } from "src/constants/constants";

export const Footer = styled.footer`
  margin: 0 auto;
  height: 100vh;
  max-height: ${MAX_DEVICE_HEIGHT}px;
  max-width: ${({ theme }) => theme.breakpoints.desktopQHD};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    height: 100%;
    max-height: unset;
  }
`;

export const FooterInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 50px;
`;

export const FooterTitle = styled(StyledTitleSection)`
  padding: 17px 0 25px 0;
  margin-top: 5%;
`;

export const FooterBackground = styled(Image)`
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
  width: 100%;
  text-align: center;
  font: var(--text-regular-pre-large);
  margin-top: 50px;
  margin-bottom: 3%;
`;
