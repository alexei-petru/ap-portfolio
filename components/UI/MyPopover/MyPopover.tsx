import { PopoverProps } from "@mantine/core";
import * as St from "./MyPopover.styled";

export interface MyPopoverDropDownProps extends PopoverProps {
  buttonInfoIsEnabled: boolean;
  buttonInfoContent?: string | null;
}

const MyPopoverDropDown = ({
  buttonInfoIsEnabled,
  buttonInfoContent,
  children,
}: MyPopoverDropDownProps) => {
  return (
    <St.StyledPopoverDropdown>
      <St.PopoverDropdownButtonClose>x</St.PopoverDropdownButtonClose>
      <St.PopoverDropdownText>{children}</St.PopoverDropdownText>
      {buttonInfoIsEnabled && (
        <St.PopoverButtonInfo>{buttonInfoContent}</St.PopoverButtonInfo>
      )}
    </St.StyledPopoverDropdown>
  );
};

export default MyPopoverDropDown;
