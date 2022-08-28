import React, { InputHTMLAttributes } from "react";
import * as St from "./MyInput.styled";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelDescription: string;
  label: boolean;
}

const MyInput = ({ labelDescription, ...props }: MyInputProps) => {
  return (
    <St.MyInputWrapper>
      {props.label && (
        <St.MyInputLabel htmlFor={props.type}>
          {labelDescription}
        </St.MyInputLabel>
      )}
      <St.MyInput {...props} />
    </St.MyInputWrapper>
  );
};

export default MyInput;
