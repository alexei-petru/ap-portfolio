import React, { ButtonHTMLAttributes } from "react";
import * as St from "./MyButton.styled";

interface myButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton = ({ children, ...rest }: myButtonProps) => {
  return (
    <St.MyButtonWrapper>
      <St.MyButton {...rest}>{children}</St.MyButton>
    </St.MyButtonWrapper>
  );
};

export default MyButton;
