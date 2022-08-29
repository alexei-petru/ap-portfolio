import MyInput from "components/UI/Input/MyInput";
import { MyButton } from "components/UI/MyButton/MyButton.styled";
import MyTexarea from "components/UI/MyTexarea/MyTextarea";
import React from "react";
import ContactMessage from "../ContactMessage/ContactMessage";
import * as St from "./Form.styled";

const Form = () => {
  return (
    <St.Form>
      <ContactMessage />
      <MyInput isLabel={true} type={"email"} labelDescription={"Email"} />
      <MyInput isLabel={true} type={"text"} labelDescription={"Subject"} />
      <MyTexarea
        isLabel={true}
        labelDescription={"Message"}
        name={"textarea"}
        cols={30}
        rows={10}
      />
      <MyButton>Send Message</MyButton>
    </St.Form>
  );
};

export default Form;
