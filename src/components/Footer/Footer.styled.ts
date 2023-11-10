import styled from "@emotion/styled";
import { StyledTitleSection } from "src/styles/StyledReusable.styled";
import {
  var_ContactItemHeight,
  var_ContactItemWidth,
} from "src/constants-types/cssVariables";

export const Footer = styled.footer`
  position: relative;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.desktopQHD};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    height: 100%;
    max-height: unset;
  }
`;

export const FooterBackgroundWrapper = styled.div`
  position: absolute;
  opacity: 0.8;
  filter: blur(4px);
  border-radius: 5px;
  width: 100%;
  height: 100%;
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
  height: 100%;
  min-height: ${var_ContactItemHeight};
  margin-bottom: 100px;
`;

export const footerCopyright = styled.p`
  width: 100%;
  text-align: center;
  font: var(--text-regular-pre-large);
`;
