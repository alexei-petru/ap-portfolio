import MyErrorMessage from "../MyErrorMessage/MyErrorMessage";
import * as St from "./MyInput.styled";

interface MyInputProps extends React.ComponentPropsWithoutRef<"input"> {
  labelDescription: string;
  isLabel: boolean;
  isError: string;
}

const MyInput = ({ labelDescription, isError, ...props }: MyInputProps) => {
  return (
    <St.MyInputWrapper>
      {props.isLabel && (
        <St.MyInputLabel htmlFor={props.type}>
          {labelDescription}
        </St.MyInputLabel>
      )}
      <St.MyInput maxLength={1000} {...props} />
      {isError && <MyErrorMessage text={isError} />}
    </St.MyInputWrapper>
  );
};

export default MyInput;
