import { InputProps } from "@mantine/core";
import MyErrorMessage from "../MyErrorMessage/MyErrorMessage";
import * as St from "./MyInput.styled";

interface MyInputProps extends React.ComponentPropsWithoutRef<"input"> {
  labelDescription: string;
  isLabel: boolean;
  isError: string;
  id: string;
  mantineProps?: InputProps;
}

const MyInput = ({
  isLabel,
  labelDescription,
  id,
  isError,
  mantineProps,
}: MyInputProps) => {
  return (
    <St.MyInputWrapper>
      {isLabel && (
        <St.MyInputLabel htmlFor={id}>{labelDescription}</St.MyInputLabel>
      )}
      <St.MyInput id={id} maxLength={1000} {...mantineProps} />
      {isError && <MyErrorMessage text={isError} />}
    </St.MyInputWrapper>
  );
};

export default MyInput;
