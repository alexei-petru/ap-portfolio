import HCaptcha from "@hcaptcha/react-hcaptcha";
import AlienSvg from "components/Footer/Form/AlienSvg";
import MyInput from "components/UI/Input/MyInput";
import { MyButton } from "components/UI/MyButton/MyButton.styled";
import MyTexarea from "components/UI/MyTexarea/MyTextarea";
import Joi from "joi";
import { emailResponseType } from "pages/api/email/email";
import React, { useEffect, useRef, useState } from "react";
import { getInputsValidation } from "utils/getInputsValidation";
import ContactMessage from "../ContactMessage/ContactMessage";
import * as St from "./Form.styled";

export type inputsType = {
  email: string;
  subject: string;
  message: string;
};

const sendFormDataToSrv = async (
  inputsText: inputsType,
  formVerifyToken: string
) => {
  const response = await fetch("/api/email/email", {
    method: "POST",
    body: JSON.stringify({ inputsText, formVerifyToken }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData: Promise<emailResponseType> = await response.json();
  const isEmailSendedResponse = (await responseData).isEmailSended;

  return isEmailSendedResponse;
};

const updateErrorsMessages = (
  validationErrors: Joi.ValidationErrorItem[],
  setInputsErrors: React.Dispatch<
    React.SetStateAction<{
      email: string;
      subject: string;
      message: string;
    }>
  >,
  inputsErrors: inputsType
) => {
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
};

const useEraseInputsErrorsOnInputsChange = (
  setInputsErrors,
  emailInputText,
  subjectInputText,
  messageInputText
) => {
  useEffect(() => {
    setInputsErrors({ email: "", subject: "", message: "" });
  }, [emailInputText, subjectInputText, messageInputText]);
};

const Form = () => {
  const [isMessageSended, setIsMessageSended] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formVerifyToken, setFormVerifyToken] = useState<null | string>(null);

  let isFormJustReseted = useRef(false);

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

  // const captchaError: null | boolean = null;

  const captchaRef = useRef<HCaptcha>(null);

  const resetInputTextFields = () => {
    setEmailInputText("");
    setSubjectInputText("");
    setMessageInputText("");
  };

  const showHCaptcha = (captchaRef: React.RefObject<HCaptcha>) => {
    captchaRef.current && captchaRef.current.execute({ async: true });
  };

  const sumbitInputsValues = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { validationErrors, isInputsValid } =
        getInputsValidation(inputsText);
      setIsMessageSended(null);
      setIsLoading(true);

      if (isInputsValid) {
        if (!formVerifyToken) {
          showHCaptcha(captchaRef);
        } else {
          const isEmailSended = await sendFormDataToSrv(
            inputsText,
            formVerifyToken
          );
          setIsMessageSended(isEmailSended);
        }
        setFormVerifyToken(null);
      } else if (validationErrors) {
        updateErrorsMessages(validationErrors, setInputsErrors, inputsErrors);
      }
    } catch (error) {
      setIsMessageSended(false);
    } finally {
      setIsLoading(false);
      setFormVerifyToken(null);
    }
  };

  useEraseInputsErrorsOnInputsChange(
    setInputsErrors,
    emailInputText,
    subjectInputText,
    messageInputText
  );

  // useEffect(() => {
  //   // isFormJustReseted.current = false;
  //   if (isMessageSended && !isFormJustReseted.current) {
  //     resetInputTextFields();
  //     isFormJustReseted.current = true;
  //     return;
  //   }
  //   if (!isFormJustReseted.current) {
  //     setIsMessageSended(null);
  //     return;
  //   }
  //   // isFormJustReseted.current = false;
  // }, [isMessageSended, emailInputText, subjectInputText, messageInputText]);

  useEffect(() => {
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
      <HCaptcha
        sitekey={"ede863f0-f565-47cd-a488-5bd2f49904ef"}
        onVerify={setFormVerifyToken}
        ref={captchaRef}
        theme="dark"
        // onClose={}
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
