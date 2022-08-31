import Joi from "joi";

type emailSchemaValidationType = {
  email: string;
  subject: string;
  message: string;
};

export const emailSchemaValidation = Joi.object<emailSchemaValidationType>({
  email: Joi.string().email(),
  subject: Joi.string().min(3).max(1000).required(),
  message: Joi.string().min(3).max(30000).required(),
});
