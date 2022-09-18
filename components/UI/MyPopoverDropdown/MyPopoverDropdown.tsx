import { PopoverProps } from "@mantine/core";
import * as St from "./MyPopoverDropdown.styled";

export interface MyPopoverDropDownPropsEnabled extends PopoverProps {
  buttonInfoIsEnabled: true;
  buttonInfoContent: string;
  buttonUrl?: string;
  onClickClose: () => void;
}

export interface MyPopoverDropDownPropsDisabled extends PopoverProps {
  buttonInfoIsEnabled: false;
  buttonUrl: null;
  buttonInfoContent?: null;
  onClickClose: () => void;
}

const MyPopoverDropDown = ({
  buttonInfoIsEnabled,
  buttonInfoContent,
  buttonUrl,
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
        <St.PopoverButtonInfo
          onClick={() => {
            buttonUrl && window.open(buttonUrl, "_blank");
          }}
        >
          {buttonInfoContent}
        </St.PopoverButtonInfo>
      )}
    </St.StyledPopoverDropdown>
  );
};

export default MyPopoverDropDown;
