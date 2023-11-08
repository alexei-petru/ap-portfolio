import React from "react";
import MyErrorMessage from "../MyErrorMessage/MyErrorMessage";
import * as St from "./MyTextarea.styled";
import { TextareaProps } from "@mantine/core";
//
interface IMyTexarea extends TextareaProps {
  labelDescription: string;
  isLabel: boolean;
  isError: string;
  id: string;
}

const MyTexarea = ({
  isLabel,
  labelDescription,
  id,
  isError,
  ...props
}: IMyTexarea) => {
  return (
    <St.MyTexareaWrapper>
      {isLabel && (
        <St.MyTextareaLabel htmlFor={id}>{labelDescription}</St.MyTextareaLabel>
      )}
      <St.MyTextarea id={id} {...props} />
      {isError && <MyErrorMessage text={isError} />}
    </St.MyTexareaWrapper>
  );
};

export default MyTexarea;
