import Joi from "joi";

export const schemaValidation = (
    data:object,
    schema: Joi.ObjectSchema
    ) => {
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) return {status:false, data: getErrorDetails(error)};
    return {status:true}
};

const getErrorDetails = (error: Joi.ValidationError) =>
    error.details.map(({ message, path }: Joi.ValidationErrorItem) => ({
    message,
    path: `${Array.isArray(path) ? path[0] : path}`,
}));