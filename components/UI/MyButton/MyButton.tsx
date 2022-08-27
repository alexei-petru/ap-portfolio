import React, { ButtonHTMLAttributes } from "react";
import * as St from "./MyButton.styled";

type myButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const MyButton = ({ children, ...rest }: myButtonProps) => {
  return (
    <St.MyButtonWrapper>
      <St.MyButton {...rest}>{children}</St.MyButton>
    </St.MyButtonWrapper>
  );
};

export default MyButton;
