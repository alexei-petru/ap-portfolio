import MyInput from "components/UI/Input/MyInput";
import { MyButton } from "components/UI/MyButton/MyButton.styled";
import MyTexarea from "components/UI/MyTexarea/MyTextarea";
import React, { useState } from "react";
import ContactMessage from "../ContactMessage/ContactMessage";
import * as St from "./Form.styled";

const Form = () => {
  const [srvResponse, setSrvResponse] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sumbitInputsValues = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        inputs: {
          email,
          subject,
          message,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData: any = await response.json();

    const formMessage = responseData.isFormValid ? "Valid" : "Invalid";
    setSrvResponse(formMessage);
    console.log("client:", responseData);
  };
  return (
    <St.Form onSubmit={sumbitInputsValues}>
      <ContactMessage />
      <MyInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isLabel={true}
        type={"email"}
        labelDescription={"Email"}
      />
      <MyInput
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        isLabel={true}
        type={"text"}
        labelDescription={"Subject"}
      />
      <MyTexarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        isLabel={true}
        labelDescription={"Message"}
        name={"textarea"}
        cols={30}
        rows={10}
      />
      <MyButton>Send Message</MyButton>
      <ul>{`Respone : ${srvResponse}`}</ul>
    </St.Form>
  );
};

export default Form;
