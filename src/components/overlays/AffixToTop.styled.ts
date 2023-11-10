import styled from "@emotion/styled";
import { Affix } from "@mantine/core";

export const StyledAffix = styled(Affix)`
  margin-right: 1vw;
  margin-bottom: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    margin-right: 15vw;
  }
`;
