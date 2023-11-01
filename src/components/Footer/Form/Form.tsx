import HCaptcha from "@hcaptcha/react-hcaptcha";
import AlienSvg from "src/components/Footer/Form/AlienSvg";
import Joi from "joi";
import { emailResponseType } from "src/pages/api/email/email";
import React, { useEffect, useRef, useState } from "react";
import { getInputsValidation } from "src/utils/getInputsValidation";
import ContactMessage from "../ContactMessage/ContactMessage";
import * as St from "./Form.styled";
import MyInput from "src/components/shared/Input/MyInput";
import MyButton from "src/components/shared/MyButton/MyButton";
import MyTexarea from "src/components/shared/MyTexarea/MyTextarea";

export type inputsType = {
  email: string;
  subject: string;
  message: string;
};

const sendFormDataToSrv = async (
  inputsText: inputsType,
  formVerifyToken: string
) => {
  const controller = new AbortController();
  const options = {
    method: "POST",
    body: JSON.stringify({ inputsText, formVerifyToken }),
    signal: controller.signal,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("/api/email/email", options);
  setTimeout(() => controller.abort(), 40000);
  const responseData: Promise<emailResponseType> = await response.json();
  const isEmailSendedResponse = (await responseData).isEmailSended;
  return isEmailSendedResponse;
};

const updateErrorsMessages = (
  validationErrors: Joi.ValidationErrorItem[],
  setInputsErrors: React.Dispatch<React.SetStateAction<inputsType>>,
  inputsErrors: inputsType
) => {
  const errors: Record<string, string> = {};
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
  setInputsErrors: React.Dispatch<React.SetStateAction<inputsType>>,
  emailInputText: string,
  subjectInputText: string,
  messageInputText: string
) => {
  useEffect(() => {
    setInputsErrors({ email: "", subject: "", message: "" });
  }, [emailInputText, subjectInputText, messageInputText, setInputsErrors]);
};

const Form = () => {
  const [isMessageSended, setIsMessageSended] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formVerifyToken, setFormVerifyToken] = useState<null | string>(null);

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

          if (isEmailSended) resetInputTextFields();
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

  return (
    <St.Form id="contact-form" onSubmit={sumbitInputsValues} noValidate>
      <ContactMessage />
      <MyInput
        value={emailInputText}
        onChange={(e) => {
          setIsMessageSended(null);
          setEmailInputText(e.target.value);
        }}
        isLabel={true}
        type="email"
        labelDescription="Email"
        isError={inputsErrors.email}
        id="contact-form-email"
      />
      <MyInput
        value={subjectInputText}
        onChange={(e) => {
          setIsMessageSended(null);
          setSubjectInputText(e.target.value);
        }}
        isLabel={true}
        type={"text"}
        labelDescription={"Subject"}
        isError={inputsErrors.subject}
        id="contact-form-subject"
      />
      <MyTexarea
        value={messageInputText}
        onChange={(e) => {
          setIsMessageSended(null);
          setMessageInputText(e.target.value);
        }}
        isLabel={true}
        labelDescription={"Message"}
        name={"textarea"}
        cols={30}
        rows={10}
        isError={inputsErrors.message}
        id="contact-form-message"
      />
      <HCaptcha
        sitekey={"ede863f0-f565-47cd-a488-5bd2f49904ef"}
        onVerify={setFormVerifyToken}
        ref={captchaRef}
        theme="dark"
        id="hCaptcha"
        // onClose={}
      />
      <St.FormStatus isMessageSended={isMessageSended}>
        <MyButton id="contact-form-button-submit">
          Send Message
          <AlienSvg />
        </MyButton>
        {isLoading && <St.AiOutlineLoading3Quart />}
        {isMessageSended === false && (
          <St.FormDeliverMessage>
            <St.ErrorMessage isMessageSended={isMessageSended} />
            error, try again
          </St.FormDeliverMessage>
        )}
        {isMessageSended === true && (
          <St.FormDeliverMessage color="#00c700">
            <St.BsCheck isMessageSended={isMessageSended} />
            message sent
          </St.FormDeliverMessage>
        )}
      </St.FormStatus>
    </St.Form>
  );
};

export default Form;
