import styled from "@emotion/styled";
import { StyledTitleSection } from "src/styles/StyledReusable.styled";
import Image from "next/image";
import {
  var_ContactItemHeight,
  var_ContactItemWidth,
} from "src/constants/cssVariables";

export const Footer = styled.footer`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.desktopQHD};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    height: 100%;
    max-height: unset;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 50px 10px 20px;
`;

export const FooterTitle = styled(StyledTitleSection)`
  margin-bottom: 80px;
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
  margin-bottom: 50px;

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
  margin-bottom: 100px;
`;

export const footerCopyright = styled.p`
  width: 100%;
  text-align: center;
  font: var(--text-regular-pre-large);
`;
