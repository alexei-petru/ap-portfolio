import { inputsType } from "components/Footer/Form/Form";
import { NextApiRequest, NextApiResponse } from "next";
import { getInputsValidation } from "utils/getInputsValidation";
import {
  sendEmailResponseType,
  sendInputsToEmail,
} from "./sendInputsToEmail";

export type emailResponseType = {
  isEmailSended: sendEmailResponseType;
};

interface IinputsText {
  inputsText: inputsType;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { inputsText }: IinputsText = req.body;
    const { isInputsValid } = getInputsValidation(inputsText);

    let isEmailSended: sendEmailResponseType = false;

    if (isInputsValid) {
      isEmailSended = await sendInputsToEmail(inputsText);
    }
    res.status(200).json({ isEmailSended });
  }
}
