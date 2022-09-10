import MyInput from "components/UI/Input/MyInput";
import { MyButton } from "components/UI/MyButton/MyButton.styled";
import MyTexarea from "components/UI/MyTexarea/MyTextarea";
import { emailResponseType } from "pages/api/email/email";
import React, { useState } from "react";
import { getInputsValidation } from "utils/getInputsValidation";
import ContactMessage from "../ContactMessage/ContactMessage";
import AlienSvg from "components/Footer/Form/AlienSvg";

import * as St from "./Form.styled";

export type inputsType = {
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const [isMessageSended, setIsMessageSended] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [emailInputText, setEmailInput] = useState("");
  const [subjectInputText, setSubjectInput] = useState("");
  const [messageInputText, setMessageInput] = useState("");

  const inputsText = {
    email: emailInputText,
    subject: emailInputText,
    message: emailInputText,
  };

  const sumbitInputsValues = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { validationErrors, isInputsValid } =
        getInputsValidation(inputsText);
      if (isInputsValid) {
        setIsLoading(true);

        const response = await fetch("/api/email/email", {
          method: "POST",
          body: JSON.stringify({ inputsText }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData: Promise<emailResponseType> = await response.json();

        setIsMessageSended((await responseData).isEmailSended);
        setIsLoading(false);

        console.log("client isInputsValid", isInputsValid);
      } else if (validationErrors) {
        console.log("validationErrors", validationErrors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <St.Form onSubmit={sumbitInputsValues} noValidate>
      <ContactMessage />

      <MyInput
        value={emailInputText}
        onChange={(e) => setEmailInput(e.target.value)}
        isLabel={true}
        type={"email"}
        labelDescription={"Email"}
      />
      <MyInput
        value={subjectInputText}
        onChange={(e) => setSubjectInput(e.target.value)}
        isLabel={true}
        type={"text"}
        labelDescription={"Subject"}
      />
      <MyTexarea
        value={messageInputText}
        onChange={(e) => setMessageInput(e.target.value)}
        isLabel={true}
        labelDescription={"Message"}
        name={"textarea"}
        cols={30}
        rows={10}
      />
      <MyButton>
        Send Message {isLoading && <span>loading...</span>}
        <AlienSvg />
      </MyButton>
      {isMessageSended && <p>Message have been send</p>}
    </St.Form>
  );
};

export default Form;
