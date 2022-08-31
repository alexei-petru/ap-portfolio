import { PopoverProps } from "@mantine/core";
import * as St from "./MyPopover.styled";

export interface MyPopoverDropDownPropsEnabled extends PopoverProps {
  buttonInfoIsEnabled: true;
  buttonInfoContent: string;
  onClickClose: () => void;
}

export interface MyPopoverDropDownPropsDisabled extends PopoverProps {
  buttonInfoIsEnabled: false;
  buttonInfoContent?: null;
  onClickClose: () => void;
}

const MyPopoverDropDown = ({
  buttonInfoIsEnabled,
  buttonInfoContent,
  children,
  onClickClose,
}: MyPopoverDropDownPropsEnabled | MyPopoverDropDownPropsDisabled) => {
  return (
    <St.StyledPopoverDropdown>
      <St.PopoverDropdownButtonClose onClick={() => onClickClose()}>
        x
      </St.PopoverDropdownButtonClose>
      <St.PopoverDropdownText>{children}</St.PopoverDropdownText>
      {buttonInfoIsEnabled && (
        <St.PopoverButtonInfo>{buttonInfoContent}</St.PopoverButtonInfo>
      )}
    </St.StyledPopoverDropdown>
  );
};

export default MyPopoverDropDown;
