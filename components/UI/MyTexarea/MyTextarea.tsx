import React from "react";
import * as St from "./MyTextarea.styled";
//
interface IMyTexarea
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  labelDescription: string;
  isLabel: boolean;
}

const MyTexarea = ({ labelDescription, ...props }: IMyTexarea) => {
  return (
    <St.MyTexareaWrapper>
      {props.isLabel && (
        <St.MyTextareaLabel htmlFor={props.name}>
          {labelDescription}
        </St.MyTextareaLabel>
      )}
      <St.MyTextarea {...props} />
      {/* <p style={{ fontSize: "15px", color: "red", marginTop: "-5px" }}>error</p> */}
    </St.MyTexareaWrapper>
  );
};

export default MyTexarea;
