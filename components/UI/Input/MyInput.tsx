import React, { InputHTMLAttributes } from "react";
import * as St from "./MyInput.styled";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelDescription: string;
  label: boolean;
}

const MyInput = ({ labelDescription, ...props }: MyInputProps) => {
  return (
    <St.MyInputWrapper>
      {props.label && <label htmlFor={props.type}>{labelDescription}</label>}
      <input {...props} />
    </St.MyInputWrapper>
  );
};

export default MyInput;
