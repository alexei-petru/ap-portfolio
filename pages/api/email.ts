import { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { inputs } = req.body;
    console.log("SRV_REQ:", inputs);

    const schema = Joi.object({
      email: Joi.string().email(),
      subject: Joi.string().alphanum().min(3).max(46).required(),
      message: Joi.string().min(3).max(10000).required(),
    });
    // const { rawEmail, error: emailError } = schema.validate(inputs.email);
    // const { rawSubject, error: subjectError } = schema.validate(inputs.subject);
    // const { rawMessage, error: messageError } = schema.validate(inputs.message);
    // console.log("emailError", emailError);
    // console.log("subjectError", subjectError);
    // console.log("messageError", messageError);
    const { error, value } = schema.validate(inputs, { abortEarly: false });

    console.log("ERROR", error?.details);

    res.status(200).json("testing");
  }
}
