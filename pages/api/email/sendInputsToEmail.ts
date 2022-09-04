import { inputsType } from "components/Footer/Form/Form";
import nodemailer from "nodemailer";

export type sendEmailResponseType = boolean;

export const sendInputsToEmail = async (inputs: inputsType) => {
  const transporter = nodemailer.createTransport({
    // host: "smtp.zoho.eu",
    // port: 465,
    // secure: true, //ssl
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.ETHERAL_LOGIN_APP_SEND,
      pass: process.env.ETHERAL_PSW_APP_SEND,
    },
  });

  const mailOptions = {
    from: "process.env.ZOHO_EMAIL_SEND",
    to: process.env.ETHERAL_LOGIN_APP_SEND,
    subject: `a.p portfolio:${inputs.subject}`,
    text: `${inputs.message} `,
    html: `<h3>Subject:${inputs.subject} </h3>
    <h5>From ${inputs.email}</h5>
     <p>Message:${inputs.message} </p>
    `,
  };

  let response: sendEmailResponseType = false;

  try {
    const info = await transporter.sendMail(mailOptions);
    if (info) {
      response = true;
    }
  } catch (error) {
    console.log("an Error ocurred", error);
    response = false;
  } finally {
    return response;
  }
};
