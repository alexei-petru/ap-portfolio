import React from "react";
import MyErrorMessage from "../MyErrorMessage/MyErrorMessage";
import * as St from "./MyTextarea.styled";
//
interface IMyTexarea extends React.ComponentPropsWithoutRef<"textarea"> {
  labelDescription: string;
  isLabel: boolean;
  isError: string;
}

const MyTexarea = ({ labelDescription, isError, ...props }: IMyTexarea) => {
  return (
    <St.MyTexareaWrapper>
      {props.isLabel && (
        <St.MyTextareaLabel htmlFor={props.name}>
          {labelDescription}
        </St.MyTextareaLabel>
      )}
      <St.MyTextarea {...props} />
      {isError && <MyErrorMessage text={isError} />}
    </St.MyTexareaWrapper>
  );
};

export default MyTexarea;
