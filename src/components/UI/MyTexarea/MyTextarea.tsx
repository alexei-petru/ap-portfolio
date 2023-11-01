import React from "react";
import MyErrorMessage from "../MyErrorMessage/MyErrorMessage";
import * as St from "./MyTextarea.styled";
//
interface IMyTexarea extends React.ComponentPropsWithoutRef<"textarea"> {
  labelDescription: string;
  isLabel: boolean;
  isError: string;
  id: string;
}

const MyTexarea = ({ labelDescription, id, isError, ...props }: IMyTexarea) => {
  return (
    <St.MyTexareaWrapper>
      {props.isLabel && (
        <St.MyTextareaLabel htmlFor={id}>{labelDescription}</St.MyTextareaLabel>
      )}
      <St.MyTextarea id={id} {...props} />
      {isError && <MyErrorMessage text={isError} />}
    </St.MyTexareaWrapper>
  );
};

export default MyTexarea;
