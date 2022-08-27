import MyInput from "components/UI/Input/MyInput";
import { MyButton } from "components/UI/MyButton/MyButton.styled";
import MyTexarea from "components/UI/MyTexarea/MyTextarea";
import React from "react";

const Form = () => {
  return (
    <div className="Form">
      <MyInput label={true} type={"email"} labelDescription={"Email"} />
      <MyInput label={true} type={"text"} labelDescription={"Subject"} />
      <MyTexarea
        label={true}
        labelDescription={"Your Message"}
        name={"textarea"}
        cols={30}
        rows={10}
      />
      <MyButton>Send Message</MyButton>
    </div>
  );
};

export default Form;
