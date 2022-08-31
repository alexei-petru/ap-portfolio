import React, { TextareaHTMLAttributes } from "react";
import * as St from "./MyTextarea.styled";

interface MyTexarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelDescription: string;
  isLabel: boolean;
}

const MyTexarea = ({ labelDescription, ...props }: MyTexarea) => {
  return (
    <St.MyTexareaWrapper>
      {props.isLabel && (
        <St.MyTextareaLabel htmlFor={props.name}>
          {labelDescription}
        </St.MyTextareaLabel>
      )}
      <St.MyTextarea maxLength={5000} {...props} />
      <p style={{ fontSize: "15px", color: "red", marginTop: "-5px" }}>error</p>
    </St.MyTexareaWrapper>
  );
};

export default MyTexarea;
