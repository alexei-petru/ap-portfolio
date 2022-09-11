import React from "react";
import * as St from "./MyErrorMessage.styled";

interface MyErrorMessageProps
  extends React.DetailedHTMLProps<
    React.ParamHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text?: string;
}

const MyErrorMessage = ({ children, text, ...props }: MyErrorMessageProps) => {
  return <St.ErrorMessage {...props}>{text || children}</St.ErrorMessage>;
};

export default MyErrorMessage;
