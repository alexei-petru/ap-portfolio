import styled from "@emotion/styled";
import { Popover as mantinePopover } from "@mantine/core";
import MyButton from "../MyButton/MyButton";

export const StyledPopover = styled(mantinePopover)``;

export const StyledPopoverDropdown = styled(mantinePopover.Dropdown)`
  background-color: ${({ theme }) =>
    theme.colors.popoverDropDownBackgroundColor[0]};
`;

export const PopoverDropdownText = styled.p`
  color: white;
  text-align: center;
  padding-bottom: 5px;
  border-radius: 5px;
  max-width: 298px;
  font-size: 17px;
  font-weight: 400;
  font-family: "roboto";
  z-index: 99;
  background-color: inherit;
`;

export const PopoverButtonInfo = styled(MyButton)`
  margin-top: 5px;
`;

export const PopoverDropdownButtonClose = styled(MyButton)`
  margin-left: auto;
  padding: 0 3px;
  background-color: #7c0000;
  box-shadow: 0 2px 5px rgb(255 15 15 / 54%);
  border-radius: 2px;
  padding: 0 3px;
  margin-bottom: 4px;

  :hover {
    background-color: #b00101;
  }
`;
