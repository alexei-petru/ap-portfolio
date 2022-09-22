import styled from "@emotion/styled";
import { Popover as mantinePopover } from "@mantine/core";
import MyButton from "../MyButton/MyButton";

export const StyledPopover = styled(mantinePopover)``;

export const StyledPopoverDropdown = styled(mantinePopover.Dropdown)`
  background-color: ${({ theme }) =>
    theme.colors.popoverDropDownBackgroundColor};
  z-index: 99;
`;

export const PopoverDropdownText = styled.div`
  color: white;
  text-align: center;
  padding-bottom: 5px;
  border-radius: 5px;
  max-width: 298px;
  font: var(--text-regular-pre-large);
  z-index: 99;
  background-color: inherit;
`;

export const PopoverButtonInfo = styled(MyButton)`
  margin-top: 5px;
`;

export const PopoverDropdownButtonClose = styled(MyButton)`
  background-color: #7c0000;
  box-shadow: 0 2px 5px rgb(255 15 15 / 54%);
  border-radius: 2px;
  margin: -3px 0 2px auto;
  padding: 0 5px;

  :hover {
    background-color: #b00101;
  }
`;
