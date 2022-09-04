import { inputsType } from "components/Footer/Form/Form";
import { NextApiRequest, NextApiResponse } from "next";
import { getInputsValidation } from "utils/getInputsValidation";
import { sendInputsToEmail } from "./sendInputsToEmail";
import { sendEmailResponseType } from "./sendInputsToEmail";

export type emailResponseType = {
  isEmailSended: sendEmailResponseType;
};

interface Iinputs {
  inputs: inputsType;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { inputs }: Iinputs = req.body;
    const { isInputsValid } = getInputsValidation(inputs);

    let isEmailSended: sendEmailResponseType = false;

    try {
      if (isInputsValid) {
        isEmailSended = await sendInputsToEmail(inputs);
        console.log("isEmailSended server",isEmailSended)
      }
    } catch (error) {
      console.log(error);
    } finally {
      res.status(200).json({ isEmailSended });
    }
  }
}