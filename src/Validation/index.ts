import { RegisterSchema } from "../Modules/Validation/ValidationSchemas/test";
import { schemaValidation } from "../Utils/Validation";

export const validateRegister = (data:object)=> schemaValidation(data,RegisterSchema)