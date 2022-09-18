import { inputsType } from "components/Footer/Form/Form";
import nodemailer from "nodemailer";

export type sendEmailResponseType = boolean;

const mainEmailTransporter = {
  host: "smtp.zoho.eu",
  port: 465,
  secure: true, //ssl
  auth: {
    user: process.env.ZOHO_EMAIL_SEND,
    pass: process.env.ZOHO_PSW_SEND,
  },
  tls: { rejectUnauthorized: false },
};

// const testEmailTransporter = {
//   host: "smtp.ethereal.email",
//   port: 587,
//   auth: {
//     user: process.env.ETHERAL_LOGIN_APP_SEND,
//     pass: process.env.ETHERAL_PSW_APP_SEND,
//   },
//   tls: { rejectUnauthorized: false },
// };

export const sendInputsToEmail = async (inputs: inputsType) => {
  const transporter = nodemailer.createTransport(mainEmailTransporter);
  // const transporter = nodemailer.createTransport(testEmailTransporter);
  const mainEmailOptions = {
    from: process.env.ZOHO_EMAIL_SEND,
    to: process.env.EMAIL_LOGIN_RECEIVE,
    subject: `a.p portfolio:${inputs.subject}`,
    text: `${inputs.message}`,
    html: `<h3>Subject:${inputs.subject} </h3>
    <h5>From ${inputs.email}</h5>
     <p>Message:${inputs.message} </p>
    `,
  };

  // const testEmailOptions = {
  //   from: inputs.email,
  //   to: process.env.ETHERAL_LOGIN_APP_SEND,
  //   subject: `a.p portfolio:${inputs.subject}`,
  //   text: `${inputs.message}`,
  //   html: `<h3>Subject:${inputs.subject} </h3>
  //   <h5>From ${inputs.email}</h5>
  //    <p>Message:${inputs.message} </p>
  //   `,
  // };

  let response: sendEmailResponseType = false;

  try {
    const info = await transporter.sendMail(mainEmailOptions);
    // const info = await transporter.sendMail(testEmailOptions);
    if (info) {
      response = true;
    }
  } catch (error) {
    response = false;
  } finally {
    return response;
  }
};
