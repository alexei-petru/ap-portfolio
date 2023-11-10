import { inputsType } from "src/components/Footer/Form/FormReal/FormReal";
import { verify } from "hcaptcha";
import { NextApiRequest, NextApiResponse } from "next";
import { getInputsValidation } from "src/utils/getInputsValidation";
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
  const SITE_KEY = process.env.HCAPTCHA_SITE_KEY;

  if (!SECRET_KEY || !SITE_KEY) {
    return false;
  }

  try {
    const verifyData = await verify(SECRET_KEY, token, undefined, SITE_KEY);
    return verifyData.success === true;
  } catch (error) {
    return false;
  }
};

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { inputsText, formVerifyToken }: formReqI = req.body;
//     const { isInputsValid } = getInputsValidation(inputsText);

//     const isTokenValid = await getTokenValidity(formVerifyToken);

//     let isEmailSended: sendEmailResponseType = false;

//     if (isInputsValid && isTokenValid) {
//       await new Promise<void>(async (resolve) => {
//         setTimeout(() => {
//           resolve();
//         }, 40000);
//         isEmailSended = await sendInputsToEmail(inputsText);
//         resolve();
//       });
//     }

//     res.status(200).json({ isEmailSended });
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { inputsText, formVerifyToken }: formReqI = req.body;
    const { isInputsValid } = getInputsValidation(inputsText);

    if (!isInputsValid) {
      return res.status(400).json({ error: "Invalid inputs" });
    }

    const isTokenValid = await getTokenValidity(formVerifyToken);

    if (!isTokenValid) {
      return res.status(400).json({ error: "Invalid token" });
    }

    const isEmailSended = await sendInputsToEmail(inputsText);

    return res.status(200).json({ isEmailSended });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
