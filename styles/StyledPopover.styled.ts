import { Popover as mantinePopover } from "@mantine/core";
import styled from "@emotion/styled";

export const StyledPopover = styled(mantinePopover)``;

export const StyledPopoverDropdown = styled(mantinePopover.Dropdown)`
  background-color: ${({ theme }) => theme.colors.gray[3]};
  p {
    padding: 5px;
    border-radius: 5px;
    color: black;
    max-width: 298px;
    font-size: 17px;
    font-weight: 400;
    font-family: "roboto";
    z-index: 99;
  }
`;
