import { inputsType } from "components/Footer/Form/Form";
import { verify } from "hcaptcha";
import { NextApiRequest, NextApiResponse } from "next";
import { getInputsValidation } from "utils/getInputsValidation";
import { sendEmailResponseType, sendInputsToEmail } from "./sendInputsToEmail";

export type emailResponseType = {
  isEmailSended: sendEmailResponseType;
};

interface formReqI {
  inputsText: inputsType;
  formVerifyToken: string;
}

const getTokenValidity = async (token: string) => {
  const SECRET_KEY = process.env.HCAPTCHA_SECRET_PSW;
  let response = false;

  if (SECRET_KEY) {
    verify(SECRET_KEY, token)
      .then((data) => {
        if (data.success === true) {
          console.log("success!", data);
        } else {
          console.log("verification failed");
        }
      })
      .catch(console.error);
  }
  return response;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { inputsText, formVerifyToken }: formReqI = req.body;
    const { isInputsValid } = getInputsValidation(inputsText);

    const isTokenValid = await getTokenValidity(formVerifyToken);

    let isEmailSended: sendEmailResponseType = true;
    if (isInputsValid && isTokenValid) {
      // isEmailSended = await sendInputsToEmail(inputsText);
    }
    res.status(200).json({ isEmailSended });
  }
}
