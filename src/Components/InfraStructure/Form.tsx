import { useCallback, useEffect, useState,FormEvent } from "react"
import { ValidationError } from "../../Types/Error"
import { InputFieldType } from "../../Types/PropsTypes";
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
}

const Form = ({
    emptyForm,
    defaultValues,
    formStructure,
    validateFunction,
    onSubmit,
    formSubmitButtonLabel= "Submit"
}:PropsTypes) => {

    const [formData,setFormData] = useState(emptyForm);

    const [formError,setFormError] = useState(emptyForm);

    const [currentUpdatingField, setCurrentUpdatingField] = useState('');

    const [valid,setValid] = useState(false);

    const onChange = (key:string,value:string)=>{
        setCurrentUpdatingField(key)
        setFormData((prev:any)=>({
            ...prev,
            [key]:value
        }))
    }

    const onErrorChange = (key:string,value:string)=>{
        setFormError((prev:any)=>({
            ...prev,
            [key]:value
        }))
    }

    const validate = useCallback((key:string)=>{
        setValid(false);
        const result = validateFunction(formData);
        if (!result?.status && result.data) {
            setFormError((prev:any) => ({ ...prev, [key]: '' }));
            return result.data.forEach(({ path, message }: ValidationError) => {
                if (key === path) onErrorChange(path, message);
            });
        }
        setValid(true);
        return setFormError(emptyForm);

    },[setFormError,formData,emptyForm,validateFunction])

    useEffect(()=>{
        if(currentUpdatingField) validate(currentUpdatingField);
    },[formData,currentUpdatingField,validate])

    useEffect(()=>{
        if(defaultValues) setFormData(defaultValues)
    },[defaultValues])

    const submit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit(formData)
    }
   

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
        <button type="submit" disabled={!valid}>{formSubmitButtonLabel}</button>
    </form>
  )
}

export default Form