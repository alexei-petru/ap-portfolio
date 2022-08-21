import { Popover as mantinePopover } from "@mantine/core";
import styled from "@emotion/styled";

export const StyledPopover = styled(mantinePopover)``;

export const StyledPopoverDropdown = styled(mantinePopover.Dropdown)`
  background-color: ${({ theme }) => theme.colors.gray[3]};
`;
