import Joi from "joi";
import { JoiRequiredRegularName, JoiRequiredEmail, JoiRequiredPhone} from "../Common";

export const RegisterSchema = Joi.object({
  name: JoiRequiredRegularName("Name"),
  email: JoiRequiredEmail("Email"),
  phone: JoiRequiredPhone("Phone")
});
