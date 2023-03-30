import useForm from "../../Hooks/useForms";
import { InputFieldType } from "../../Types/PropsTypes";
import Button from "../Button";
import InputField from "../Input"

type FormField = {
    field:string;
    label:string;
    type?:InputFieldType
}

interface PropsTypes {
    emptyForm: any,
    defaultValues?: any;
    formStructure:FormField[];
    validateFunction: (d:any)=>any;
    onSubmit: (data:any)=>void;
    formSubmitButtonLabel?: string;
    serverError?:any;
}

const Form = ({
    emptyForm,
    defaultValues,
    formStructure,
    validateFunction,
    onSubmit,
    serverError,
    formSubmitButtonLabel= "Submit"
}:PropsTypes) => {

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
                value={(formData as any)[field.field]}
                onChange={(v)=>onChange(field.field,v)}
                error={(formError as any)[field.field]}
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