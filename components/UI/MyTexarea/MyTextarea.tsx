import React, { TextareaHTMLAttributes } from "react";
import * as St from "./MyTextarea.styled";

interface MyTexarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelDescription: string;
  label: boolean;
}

const MyTexarea = ({ labelDescription, ...props }: MyTexarea) => {
  return (
    <St.MyTexareaWrapper>
      {props.label && <label htmlFor={props.name}>{labelDescription}</label>}
      <textarea {...props} />
    </St.MyTexareaWrapper>
  );
};

export default MyTexarea;
