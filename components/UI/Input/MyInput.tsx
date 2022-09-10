import React, { InputHTMLAttributes } from "react";
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
    </St.MyInputWrapper>
  );
};

export default MyInput;
