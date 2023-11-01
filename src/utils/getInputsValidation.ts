import Joi from "joi";

type emailSchemaValidationType = {
  email: string;
  subject: string;
  message: string;
};

const emailSchemaValidation = Joi.object<emailSchemaValidationType>({
  email: Joi.string().email({ tlds: { allow: false } }),
  subject: Joi.string().min(3).max(999).required().messages({
    "string.base": `"{#key}" should be a type of 'text'`,
    "string.empty": `"{#key}" cannot be an empty field`,
    "any.required": `"{#key}" is a required.`,
    "string.min": `"{#key}": minimum {#limit} characters`,
    "string.max": `"{#key}": max {#limit} characters`,
  }),
  message: Joi.string().min(3).max(30000).required().messages({
    "string.base": `"{#key}" should be a type of 'text'`,
    "string.empty": `"{#key}" cannot be an empty field`,
    "any.required": `"{#key}" is a required.`,
    "string.min": `"{#key}": minimum {#limit} characters`,
    "string.max": `"{#key}": max {#limit} characters`,
  }),
});

export const getInputsValidation = (inputsText: emailSchemaValidationType) => {
  const { error } = emailSchemaValidation.validate(inputsText, {
    abortEarly: false,
  });

  const isInputsValid = error === undefined && inputsText ? true : false;

  const validatedObj = {
    validationErrors: error?.details,
    isInputsValid,
  };
  return validatedObj;
};
