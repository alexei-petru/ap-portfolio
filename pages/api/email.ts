import { NextApiRequest, NextApiResponse } from "next";
import { emailSchemaValidation } from "utils/schemas";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { inputs } = req.body;
    console.log("SRV_REQ:", inputs);

    const { error } = emailSchemaValidation.validate(inputs, {
      abortEarly: false,
    });

    const validatedObj = {
      errors: error,
      isFormValid: !error,
    };
    console.log("ERROR", error?.details);
    res.status(200).json(validatedObj);
  }
}
