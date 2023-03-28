import Joi from "joi";

export const JoiRandomId = (Entity: string = "Id",length=6) =>
  Joi.string()
    .required()
    .length(length)
    .messages({
      "string.base": `${Entity} id is required`,
      "any.required": `${Entity} id is required`,
      "string.empty": `${Entity} id is required`,
      "string.length": `${Entity} must be ${length} characters`,
    });

export const JoiRequiredRandomId = (Entity?: string) => JoiRandomId(Entity).required();


type NameValidationOption = {
  min?: number;
  max?: number;
  scheme?: RegExp;
}

export const JoiName = (Entity: string = "Name",{
  min = 3,
  max = 50,
  scheme = /^[a-zA-Z0-9_ $&()%#@!+=[\]\-/?<>]+$/
} :NameValidationOption ) =>
  Joi.string()
    .regex(scheme)
    .min(min)
    .max(max)
    .messages({
      "string.base": `${Entity} must be a string`,
      "any.required": `${Entity} is required`,
      "string.empty": `${Entity} must not be empty`,
      "string.pattern.base": `${Entity} must be a valid name`,
      "string.min": `${Entity} must be at least ${min} characters`,
      "string.max": `${Entity} must be at most ${max} characters`,
    });

export const JoiRequiredName = (Entity?: string, option?:NameValidationOption) => JoiName(Entity,option={}).required();

export const JoiRegularName = (Entity?: string, option?: NameValidationOption) => JoiName(Entity,{
  scheme: /^[a-zA-Z]+$/,
  max:option?.max,
  min: option?.min
});

export const JoiRequiredRegularName = (Entity?: string, option?:NameValidationOption) => JoiRegularName(Entity,option={}).required();


export const JoiPassword = (Entity: string = "Password",min=3,max=50) =>
  Joi
  .string()
  .min(min)
  .max(max)
  .messages({
    "string.base": `${Entity} must be a string`,
    "any.required": `${Entity} is required`,
    "string.empty": `${Entity} must not be empty`,
    "string.pattern.base": `${Entity} must be a valid name`,
    "string.min": `${Entity} must be at least ${min} characters`,
    "string.max": `${Entity} must be at most ${max} characters`,
  });

export const JoiRequiredPassword = (Entity?: string,min?:number,max?:number) => JoiPassword(Entity,min,max).required();

export const JoiPhone = (Entity = "Phone") =>
  Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .messages({
      "string.empty": `${Entity} cannot be empty`,
      "any.required": `${Entity} is required`,
      "string.length": `${Entity} must be 10 digit`,
      "string.pattern.base": `${Entity} must be number`,
      "string.base": `${Entity} must be a number`,
    });

export const JoiRequiredPhone = (Entity?: string) => JoiPhone(Entity).required();

export const JoiEmail = (Entity: string = "Email") =>
  Joi.string()
    .email({ tlds: { allow: false } })
    .allow("")
    .messages({
      "string.empty": `${Entity} cannot be empty`,
      "any.required": `${Entity} is required`,
      "string.email": `${Entity} must be a valid email`,
    });

export const JoiRequiredEmail = (Entity?: string) => JoiEmail(Entity).required();


export const JoiRate = (Entity: string = "Rate") =>
  Joi.number()
    .messages({
      "number.base": `${Entity} must be a number`,
      "any.required": `${Entity} is required`,
    })

export const JoiRequiredRate = (Entity?: string) => JoiRate(Entity).required();