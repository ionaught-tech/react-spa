import useForm, { ValidationError } from "../../Hooks/useForms";
import { InputFieldType } from "../../Types/PropsTypes";
import { SchemaValidationResponse } from "../../Utils/Validation";
import Button from "../Button";
import InputField from "../Input"

type FormField = {
    field:string;
    label:string;
    type?:InputFieldType
}

interface PropsTypes <FormData>{
    emptyForm: FormData,
    defaultValues?: FormData;
    formStructure:FormField[];
    validateFunction: (d:FormData)=>SchemaValidationResponse;
    onSubmit: (data:FormData)=>void;
    formSubmitButtonLabel?: string;
    serverError?:ValidationError[];
}

const Form = <FormData extends Record<string,any>,>({
    emptyForm,
    defaultValues,
    formStructure,
    validateFunction,
    onSubmit,
    serverError,
    formSubmitButtonLabel= "Submit"
}:PropsTypes<FormData>) => {

    const {
        submit,
        formData,
        valid,
        formError,
        onChange
    } = useForm({
        emptyForm,
        defaultValues,
        validateFunction,
        onSubmit,
        serverError
    })

  return (
    <form onSubmit={submit}>
        {formStructure.map((field)=>
            <InputField
                {...field}
                key={field.field}
                value={formData[field.field]}
                onChange={(v)=>onChange(field.field,v)}
                error={formError[field.field]}
            />
        )}
        <Button
            label={formSubmitButtonLabel}
            action="submit"
            disabled={!valid}
        />
    </form>
  )
}

export default Form