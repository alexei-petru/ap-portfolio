import styled from "@emotion/styled";
import { Affix } from "@mantine/core";

export const StyledAffix = styled(Affix)`
  margin-right: -10px;
  margin-bottom: 40px;
  padding: 0;

  button {
    width: 80px !important;
  }

  .mantine-Button-root {
    background-color: transparent;
    padding: 0 !important;
    margin-right: 10px;
  }

  @media (max-width: 1030px) {
    margin-right: -20px;
    button {
      width: 60px !important;
    }
  }

  @media (max-width: 450px) {
    display: none;
  }
`;
