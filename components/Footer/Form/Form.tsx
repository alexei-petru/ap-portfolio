import AlienSvg from "components/Footer/Form/AlienSvg";
import MyInput from "components/UI/Input/MyInput";
import { MyButton } from "components/UI/MyButton/MyButton.styled";
import MyTexarea from "components/UI/MyTexarea/MyTextarea";
import { emailResponseType } from "pages/api/email/email";
import React, { useEffect, useState } from "react";
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
  const [isFormJustReseted, setIsFormJustReseted] = useState(false);

  const [emailInputText, setEmailInputText] = useState("");
  const [subjectInputText, setSubjectInputText] = useState("");
  const [messageInputText, setMessageInputText] = useState("");

  const inputsText = {
    email: emailInputText,
    subject: subjectInputText,
    message: messageInputText,
  };

  const [inputsErrors, setInputsErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const resetInputTextFields = () => {
    setEmailInputText("");
    setSubjectInputText("");
    setMessageInputText("");
  };

  const sumbitInputsValues = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { validationErrors, isInputsValid } =
        getInputsValidation(inputsText);
      if (isInputsValid) {
        setIsMessageSended(null);
        setIsLoading(true);

        const response = await fetch("/api/email/email", {
          method: "POST",
          body: JSON.stringify({ inputsText }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData: Promise<emailResponseType> = await response.json();

        const isEmailSendedResponse = (await responseData).isEmailSended;
        setIsLoading(false);
        // if (isEmailSendedResponse) {
        //   resetInputTextFields();
        //   setIsFormJustReseted(true);
        // }
        setIsMessageSended(isEmailSendedResponse);
      } else if (validationErrors) {
        let errors = {};
        for (const object of validationErrors) {
          if (object.context?.key) {
            errors[object.context.key] = object.message;
          }
          setInputsErrors({
            ...inputsErrors,
            ...errors,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setInputsErrors({ email: "", subject: "", message: "" });
    // if (emailInputText || subjectInputText || messageInputText) {
    //   setIsFormJustReseted(false);
    // }

    // if (!isFormJustReseted) {
    //   setIsMessageSended(null);
    // }
    setIsMessageSended(null);
  }, [emailInputText, subjectInputText, messageInputText]);

  return (
    <St.Form onSubmit={sumbitInputsValues} noValidate>
      <ContactMessage />

      <MyInput
        value={emailInputText}
        onChange={(e) => setEmailInputText(e.target.value)}
        isLabel={true}
        type={"email"}
        labelDescription={"Email"}
        isError={inputsErrors.email}
      />
      <MyInput
        value={subjectInputText}
        onChange={(e) => setSubjectInputText(e.target.value)}
        isLabel={true}
        type={"text"}
        labelDescription={"Subject"}
        isError={inputsErrors.subject}
      />
      <MyTexarea
        value={messageInputText}
        onChange={(e) => setMessageInputText(e.target.value)}
        isLabel={true}
        labelDescription={"Message"}
        name={"textarea"}
        cols={30}
        rows={10}
        isError={inputsErrors.message}
      />
      <St.FormStatus isMessageSended={isMessageSended}>
        <MyButton>
          Send Message
          <AlienSvg />
        </MyButton>
        {isLoading && <St.AiOutlineLoading3Quart />}
        {isMessageSended === false && (
          <St.FormDeliverMessage>
            <St.VscErr isMessageSended={isMessageSended} />
            error, try again
          </St.FormDeliverMessage>
        )}
        {isMessageSended === true && (
          <St.FormDeliverMessage color="#00c700">
            <St.BsCheck isMessageSended={isMessageSended} />
            delivered
          </St.FormDeliverMessage>
        )}
      </St.FormStatus>
    </St.Form>
  );
};

export default Form;
