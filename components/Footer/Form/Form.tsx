import MyInput from "components/UI/Input/MyInput";
import { MyButton } from "components/UI/MyButton/MyButton.styled";
import MyTexarea from "components/UI/MyTexarea/MyTextarea";
import { emailResponseType } from "pages/api/email/email";
import React, { useState } from "react";
import { getInputsValidation } from "utils/getInputsValidation";
import ContactMessage from "../ContactMessage/ContactMessage";
import * as St from "./Form.styled";

export type inputsType = {
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const [isMessageSended, setIsMessageSended] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const sumbitInputsValues = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { validationErrors, isInputsValid } = getInputsValidation(inputs);
      if (isInputsValid) {
        setIsLoading(true);

        const response = await fetch("/api/email/email", {
          method: "POST",
          body: JSON.stringify({ inputs }),
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
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        isLabel={true}
        type={"email"}
        labelDescription={"Email"}
      />
      <MyInput
        value={inputs.subject}
        onChange={(e) => setInputs({ ...inputs, subject: e.target.value })}
        isLabel={true}
        type={"text"}
        labelDescription={"Subject"}
      />
      <MyTexarea
        value={inputs.message}
        onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
        isLabel={true}
        labelDescription={"Message"}
        name={"textarea"}
        cols={30}
        rows={10}
      />
      <MyButton>Send Message {isLoading && <span>loading...</span>}</MyButton>
      {isMessageSended && <p>Message have been send</p>}
    </St.Form>
  );
};

export default Form;
