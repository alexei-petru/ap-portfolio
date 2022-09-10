import { InputHTMLAttributes } from "react";
import MyErrorMessage from "../MyErrorMessage/MyErrorMessage";
import * as St from "./MyInput.styled";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelDescription: string;
  isLabel: boolean;
}

const MyInput = ({ labelDescription, ...props }: MyInputProps) => {
  return (
    <St.MyInputWrapper>
      {props.isLabel && (
        <St.MyInputLabel htmlFor={props.type}>
          {labelDescription}
        </St.MyInputLabel>
      )}
      <St.MyInput maxLength={1000} {...props} />
      <MyErrorMessage text={"input must be valid"} />
    </St.MyInputWrapper>
  );
};

export default MyInput;
