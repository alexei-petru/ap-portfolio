import HCaptcha from "@hcaptcha/react-hcaptcha";
import { TextInput, Textarea } from "@mantine/core";
import Joi from "joi";
import React, { useEffect, useRef, useState } from "react";
import AlienSvg from "src/components/Footer/Form/AlienSvg";
import MyButton from "src/components/shared/MyButton/MyButton";
import { emailResponseType } from "src/pages/api/email/email";
import { getInputsValidation } from "src/utils/getInputsValidation";
import ContactMessage from "../ContactMessage/ContactMessage";
import * as St from "./Form.styled";

export type inputsType = {
  email: string;
  subject: string;
  message: string;
};

const sendFormDataToSrv = async (
  inputsText: inputsType,
  formVerifyToken: string,
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
  inputsErrors: inputsType,
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
  messageInputText: string,
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
            formVerifyToken,
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
    messageInputText,
  );

  return (
    <St.Form id="contact-form" onSubmit={sumbitInputsValues} noValidate>
      <ContactMessage />
      <TextInput
        value={emailInputText}
        onChange={(e) => {
          setIsMessageSended(null);
          setEmailInputText(e.target.value);
        }}
        error={inputsErrors.email}
        id="contact-form-email"
        label={"Email"}
        type={"email"}
        placeholder="Email"
        aria-label="Input your email"
        style={{ width: "100%" }}
        styles={{ label: { color: "white" } }}
        withAsterisk
      />
      <TextInput
        value={subjectInputText}
        onChange={(e) => {
          setIsMessageSended(null);
          setSubjectInputText(e.target.value);
        }}
        error={inputsErrors.subject}
        id="contact-form-subject"
        label={"Subject"}
        type={"text"}
        placeholder="Type message subject"
        aria-label="Subject"
        style={{ width: "100%" }}
        styles={{ label: { color: "white" } }}
        withAsterisk
      />
      <Textarea
        value={messageInputText}
        onChange={(e) => {
          setIsMessageSended(null);
          setMessageInputText(e.target.value);
        }}
        error={inputsErrors.message}
        id="contact-form-message"
        minRows={8}
        maxRows={8}
        label={"Message"}
        name={"textarea"}
        aria-label="Message"
        placeholder="Type your message"
        style={{ width: "100%", height: "100%" }}
        styles={{ label: { color: "white" } }}
        withAsterisk
      />
      <HCaptcha
        sitekey={"ede863f0-f565-47cd-a488-5bd2f49904ef"}
        onVerify={setFormVerifyToken}
        ref={captchaRef}
        theme="dark"
        id="hCaptcha"
      />
      <St.FormStatus $isMessageSended={isMessageSended}>
        <MyButton id="contact-form-button-submit">
          Send Message
          <AlienSvg />
        </MyButton>
        {isLoading && <St.AiOutlineLoading3Quart />}
        {isMessageSended === false && (
          <St.FormDeliverMessage>
            <St.ErrorMessage $isMessageSended={isMessageSended} />
            error, try again
          </St.FormDeliverMessage>
        )}
        {isMessageSended === true && (
          <St.FormDeliverMessage color="#00c700">
            <St.BsCheck $isMessageSended={isMessageSended} />
            message sent
          </St.FormDeliverMessage>
        )}
      </St.FormStatus>
    </St.Form>
  );
};

export default Form;
