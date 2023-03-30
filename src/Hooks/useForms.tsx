import { useCallback, useEffect, useState,FormEvent } from "react"

type ValidationError = {
    message: string;
    path: string;
}

interface PropsTypes {
    emptyForm: any,
    defaultValues?: any;
    validateFunction: (d:any)=>any;
    onSubmit: (data:any)=> Promise<boolean> | void;
    serverError?:any;
}

const useForm = ({
    emptyForm,
    defaultValues,
    validateFunction,
    onSubmit,
    serverError,
}:PropsTypes) => {
    
    const [submitted,setSubmitted] = useState(false)

    const [formData,setFormData] = useState(emptyForm);

    const [formError,setFormError] = useState(emptyForm);

    const [currentUpdatingField, setCurrentUpdatingField] = useState('');

    const [valid,setValid] = useState(false);

    const [loading,setLoading] = useState(false)
    
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

    const validate = useCallback((key?:string)=>{

        setValid(false);
        const result = validateFunction(formData);
        
        if (!result?.status && result.data) {
            if(key)
            setFormError((prev:any) => ({ ...prev, [key]: '' }));
            result.data.forEach(({ path, message }: ValidationError) => {
                if (!key || key === path) onErrorChange(path, message);
            });
            return false
        }
        setValid(true);
        setFormError(emptyForm);
        return true

    },[setFormError,formData,emptyForm,validateFunction])

    useEffect(()=>{
        
        if(currentUpdatingField) validate(currentUpdatingField);
    },[formData,currentUpdatingField,validate])

    useEffect(()=>{
        if(defaultValues) setFormData(defaultValues)
    },[defaultValues])

    useEffect(()=>{
        setFormError(emptyForm);
        
        if(serverError){
            serverError.forEach(({ path, message }: ValidationError) => {
                onErrorChange(path, message);
            });
            setValid(false)
        }
    },[serverError])

    const submit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setSubmitted(true);
        
        if(!validate())return
        setLoading(true)      
        const res = await onSubmit(formData)
        if(!res){
            setLoading(false)
        }
    }
   
  return {submit,formData,formError,submitted,onChange,loading,valid}
}

export default useForm