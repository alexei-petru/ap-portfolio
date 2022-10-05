import MyErrorMessage from "../MyErrorMessage/MyErrorMessage";
import * as St from "./MyInput.styled";

interface MyInputProps extends React.ComponentPropsWithoutRef<"input"> {
  labelDescription: string;
  isLabel: boolean;
  isError: string;
  id: string;
}

const MyInput = ({ labelDescription, id, isError, ...props }: MyInputProps) => {
  return (
    <St.MyInputWrapper>
      {props.isLabel && (
        <St.MyInputLabel htmlFor={id}>{labelDescription}</St.MyInputLabel>
      )}
      <St.MyInput id={id} maxLength={1000} {...props} />
      {isError && <MyErrorMessage text={isError} />}
    </St.MyInputWrapper>
  );
};

export default MyInput;
