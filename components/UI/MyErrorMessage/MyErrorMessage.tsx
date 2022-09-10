import React from "react";
import * as St from "./MyErrorMessage.styled";

interface MyErrorMessageProps
  extends React.DetailedHTMLProps<
    React.ParamHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  text: string;
}

const MyErrorMessage = ({ text, ...props }: MyErrorMessageProps) => {
  return <St.ErrorMessage {...props}>{text}</St.ErrorMessage>;
};

export default MyErrorMessage;
