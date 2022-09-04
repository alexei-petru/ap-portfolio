import Joi from "joi";

type emailSchemaValidationType = {
  email: string;
  subject: string;
  message: string;
};

const emailSchemaValidation = Joi.object<emailSchemaValidationType>({
  email: Joi.string().email({ tlds: { allow: false } }),
  subject: Joi.string().min(3).max(1000).required(),
  message: Joi.string().min(3).max(30000).required(),
});

export const getInputsValidation = (inputs: emailSchemaValidationType) => {
  const { error } = emailSchemaValidation.validate(inputs, {
    abortEarly: false,
  });

  const isInputsValid = error === undefined ? true : false;

  const validatedObj = {
    validationErrors: error?.details,
    isInputsValid,
  };
  return validatedObj;
};
