import styled from "@emotion/styled";
import { Popover as mantinePopover } from "@mantine/core";
import MyButton from "../MyButton/MyButton";

export const StyledPopover = styled(mantinePopover)``;

export const StyledPopoverDropdown = styled(mantinePopover.Dropdown)`
  background-color: ${({ theme }) =>
    theme.colors.popoverDropDownBackgroundColor[0]};
  p {
    padding: 5px;
    border-radius: 5px;
    max-width: 298px;
    font-size: 17px;
    font-weight: 400;
    font-family: "roboto";
    z-index: 99;
    background-color: inherit;
  }
`;

export const PopoverDropdownText = styled.p`
  color: white;
  text-align: center;
`;

export const PopoverButtonInfo = styled(MyButton)`
  margin-top: 5px;
`;

export const PopoverDropdownButtonClose = styled(MyButton)`
  margin-left: auto;
  padding: 0 3px;
  background-color: #7c0000;
  :hover {
    background-color: #b00101;
  }
`;
