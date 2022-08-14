import React from "react";
// import { StyledFooter } from "./Footer.styled";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-left: 20px;
  width: 20vw;

  div:nth-child(1),
  div:nth-child(2) {
    padding: 3px;
  }

  div {
    border: 1px solid red;
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>
          outer
          <div>
            a<div>1</div>
            <div>2</div>
          </div>
          <div>
            b<div>4</div>
            <div>5</div>
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
